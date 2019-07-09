package com.plugin.storetimer;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Paint;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.util.Log;
import android.util.SparseArray;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.NumberPicker;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import io.ionic.starter.R;

/**
 * This class echoes a string called from JavaScript.
 */
public class StoreTimer extends CordovaPlugin {
  public static final String TAG = "StoreTimer";
  public static final String BLANK_STRING = "";
  public static final String SPACE = " ";
  public static final int WIDTH = 50;
  public static final int HEIGHT = 50;

  public static boolean WHEEL_WRAP;
  public static final String LIGHT_THEME = "light";
  public static SelectorTheme SELECTOR_THEME = null;

  private static final String INDEX_KEY = "index";
  private static final String DISPLAY_ITEMS_KEY = "displayItems";
  private static final String DEFAULT_SELECTED_ITEMS_KEY = "defaultItems";
  private static final String DISPLAY_KEY = "displayKey";
  private static final String TITLE_KEY = "title";
  private static final String POSITIVE_BUTTON_TEXT_KEY = "positiveButtonText";
  private static final String NEGATIVE_BUTTON_TEXT_KEY = "negativeButtonText";
  private static final String WRAP_WHEEL_TEXT_KEY = "wrapWheelText";
  private static final String THEME_KEY = "theme";

  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
  }

  @Override
  public boolean execute(final String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {

    final CordovaInterface cordova = this.cordova;

    if (action.equals("showSelector")) {

      final JSONObject options = args.getJSONObject(0);

      String config = args.getString(0);
      final JSONArray items = options.getJSONArray(DISPLAY_ITEMS_KEY);
      JSONObject tmpDefaultItemsMightNotBeSet = null;

      try {
        tmpDefaultItemsMightNotBeSet = options.getJSONObject(DEFAULT_SELECTED_ITEMS_KEY);
      } catch (JSONException je) {
        tmpDefaultItemsMightNotBeSet = null;
      }

      final JSONObject defaultSelectedItems = tmpDefaultItemsMightNotBeSet;
      final String displayKey = options.getString(DISPLAY_KEY);
      final String title = options.getString(TITLE_KEY);
      final String positiveButton = options.getString(POSITIVE_BUTTON_TEXT_KEY);
      final String negativeButton = options.getString(NEGATIVE_BUTTON_TEXT_KEY);
      final String wrapSelectorText = options.getString(WRAP_WHEEL_TEXT_KEY);
      final String theme = options.getString(THEME_KEY);

      WHEEL_WRAP = Boolean.parseBoolean(wrapSelectorText);
      SELECTOR_THEME = new SelectorTheme(theme);

      Runnable runnable = new Runnable() {
        public void run() {

          DisplayMetrics dm = cordova.getActivity().getResources().getDisplayMetrics();

          AlertDialog.Builder builder = new AlertDialog.Builder(cordova.getActivity(), R.style.MyLight);
          builder.setCancelable(true);

          List<PickerView> views = null;
          try {
            views = getPickerViews(cordova.getActivity(), items, defaultSelectedItems);
          } catch (JSONException je) {
            Log.v(TAG, "Exception: " + je.getMessage());
          }

          final List<PickerView> asFinal = views;

          LinearLayout layout = new LinearLayout(cordova.getActivity());
          layout.setOrientation(LinearLayout.VERTICAL);

          LinearLayout layoutButton = new LinearLayout(cordova.getActivity());
          layoutButton.setOrientation(LinearLayout.HORIZONTAL);
          Button cancelButton = new Button(cordova.getActivity());
          cancelButton.setText(negativeButton);
          cancelButton.setBackground(null);
          cancelButton.setTextSize(14);
          cancelButton.setTextColor(SELECTOR_THEME.getNumberPickerTextColor());
          layoutButton.addView(cancelButton);

          Button okButton = new Button(cordova.getActivity());
          okButton.setText(positiveButton);
          okButton.setBackground(null);
          okButton.setTextSize(14);
          okButton.setTextColor(SELECTOR_THEME.getNumberPickerTextColor());
          okButton.setMinWidth(0);
          okButton.setMinimumWidth(0);

          LinearLayout.LayoutParams paramsOkButton = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
          paramsOkButton.rightMargin = (int)( 2.5 * dm.density + 0.5f);
          okButton.setLayoutParams(paramsOkButton);


          layoutButton.addView(okButton);

          LinearLayout.LayoutParams paramsB = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
          paramsB.gravity = Gravity.RIGHT;
          layoutButton.setLayoutParams(paramsB);

          LinearLayout layoutPicker = new LinearLayout(cordova.getActivity());
          layoutPicker.setOrientation(LinearLayout.HORIZONTAL);

          if (views != null) {
            for (int i = 0; i < views.size(); ++i) {
              layoutPicker.addView(views.get(i).getNumberPicker(), views.get(i).getLayoutParams());
            }
          } else {
            Log.d(TAG, "error, views is null");
          }

          LinearLayout.LayoutParams paramsZ = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.WRAP_CONTENT, LinearLayout.LayoutParams.WRAP_CONTENT);
          paramsZ.gravity = Gravity.CENTER;
          layoutPicker.setLayoutParams(paramsZ);

          layout.addView(layoutButton);
          layout.addView(layoutPicker);
          LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(WIDTH, HEIGHT);
          params.gravity = Gravity.CENTER;
          layout.setLayoutParams(params);

          builder.setCancelable(true);

          builder.setView(layout);


          AlertDialog alert = builder.create();
          Window window = alert.getWindow();
          WindowManager.LayoutParams wlp = window.getAttributes();
          wlp.gravity = Gravity.BOTTOM;
          wlp.width = WindowManager.LayoutParams.WRAP_CONTENT;
          window.setAttributes(wlp);
          window.getAttributes().windowAnimations = R.style.AnimBottom;

          alert.show();

          wlp.width = (int) (500 * dm.density);
          alert.getWindow().setAttributes(wlp);


          okButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View dialog) {
              JSONArray userSelectedValues = new JSONArray();
              JSONObject jsonValue = null;
              try {
                String value;
                for (int i = 0; i < asFinal.size(); ++i) {
                  jsonValue = new JSONObject();

                  value = asFinal.get(i).getDataToShow(asFinal.get(i).getNumberPicker().getValue());
                  jsonValue.put(INDEX_KEY, asFinal.get(i).getNumberPicker().getValue());

                  if (value != null && value.equalsIgnoreCase(SPACE))
                    jsonValue.put(displayKey, BLANK_STRING);
                  else
                    jsonValue.put(displayKey, value);

                  userSelectedValues.put(jsonValue);
                }
              } catch (JSONException je) {
              }
              final PluginResult resultToReturnToJS = new PluginResult(PluginResult.Status.OK, (userSelectedValues));
              callbackContext.sendPluginResult(resultToReturnToJS);
              alert.dismiss();
            }
          });

          cancelButton.setOnClickListener(new View.OnClickListener() {
            public void onClick(View dialog) {
              Log.d(TAG, "User canceled");
              callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR));
              alert.cancel();
            }
          });
        }
      };

      this.cordova.getActivity().runOnUiThread(runnable);
    }

    return true;
  }

  public static List<PickerView> getPickerViews(Activity activity, JSONArray items, JSONObject defaultSelectedValues) throws JSONException {
    List<PickerView> views = new ArrayList<PickerView>();
    for (int i = 0; i < items.length(); ++i) {
      if (defaultSelectedValues != null && defaultSelectedValues.length() == items.length()) {

        try {
          String defaultSelctedValue = defaultSelectedValues.getString(Integer.toString(i));
          views.add(new PickerView(activity, items.getJSONArray(i), defaultSelctedValue));
        } catch (JSONException je) {
          views.add(new PickerView(activity, items.getJSONArray(i), ""));
        }
      } else {
        views.add(new PickerView(activity, items.getJSONArray(i), ""));
      }
    }
    return views;
  }

  public static String[] toStringArray(JSONArray array) {
    if (array == null)
      return null;

    String[] arr = new String[array.length()];
    for (int i = 0; i < arr.length; i++) {
      if (array.optString(i) != null && array.optString(i).equalsIgnoreCase(BLANK_STRING))
        arr[i] = SPACE;
      else
        arr[i] = array.optString(i);
    }
    return arr;
  }

}
class PickerView {
    private String[] dataToShow;
    private String defaultSelectedItemValue;
    private Activity activity;
    private NumberPicker picker;

    private LinearLayout.LayoutParams numPicerParams;

    public PickerView(Activity activity, JSONArray args, String defaulSelectedtItem) {
        dataToShow = StoreTimer.toStringArray(args);
        defaultSelectedItemValue = defaulSelectedtItem;
        this.activity = activity;
    }

    public NumberPicker getNumberPicker() {
        if (picker == null) {
            picker = new MyNumberPicker(activity);
            picker.setMinValue(0);
            picker.setMaxValue(dataToShow.length - 1);

            int index = -1;

            if(defaultSelectedItemValue != null && defaultSelectedItemValue.length() > 0)
                index = Arrays.asList(dataToShow).indexOf(defaultSelectedItemValue);

            if(index < 0) {
              picker.setValue(0);
            } else {
              picker.setValue(index);
            }

            picker.setDisplayedValues(dataToShow);
            picker.setWrapSelectorWheel(StoreTimer.WHEEL_WRAP);
            picker.setDescendantFocusability(NumberPicker.FOCUS_BLOCK_DESCENDANTS);

        }
        return picker;
    }


    public LinearLayout.LayoutParams getLayoutParams() {
        if (numPicerParams == null) {
            numPicerParams = new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
            numPicerParams.weight = 1;
        }
        return numPicerParams;
    }

    public String getDataToShow(int index) {
        return dataToShow[index];
    }
}


class SelectorTheme {
    private String themeColors;

    public SelectorTheme(String theme) {
        themeColors = theme;
    }

    public int getNumberPickerTextColor() {
        if (themeColors.equalsIgnoreCase(StoreTimer.LIGHT_THEME)) {
            return 0xFF488AFF;
        }

        return Color.WHITE;
    }
}

class MyNumberPicker extends NumberPicker {
  private Context mContext;
  NumberPicker picker;

  public MyNumberPicker(Context context) {
    super(context);
    picker = this;
    mContext = context;
  }

  public MyNumberPicker(Context context, AttributeSet attrs) {
    super(context, attrs);
    picker = this;
    mContext = context;
  }

  public MyNumberPicker(Context context, AttributeSet attrs, int defStyleAttr) {
    super(context, attrs, defStyleAttr);
    picker = this;
    mContext = context;
  }

  @Override
  public void addView(View child) {
    super.addView(child);
    updateView(child);
  }

  @Override
  public void addView(View child, int index, ViewGroup.LayoutParams params) {
    super.addView(child, index, params);
    updateView(child);
  }

  @Override
  public void addView(View child, ViewGroup.LayoutParams params) {
    super.addView(child, params);
    updateView(child);
  }

  private void updateView(View view) {
    if (view instanceof EditText) {
      ((EditText) view).setTextSize(TypedValue.COMPLEX_UNIT_SP,22);
      ((EditText) view).setTextColor(Color.parseColor("#6495ED"));
    }
  }

  private int mRight, mLeft, mBottom;
  private int mTopSelectionDividerTop;
  private int mBottomSelectionDividerBottom;
  private int[] mSelectorIndices;
  private int mScrollState;
  private SparseArray<String> mSelectorIndexToStringCache;
  private EditText mInputText;
  private Paint mSelectorWheelPaint;
  private int mSelectorElementHeight;
  private int mCurrentScrollOffset;
  private boolean mHasSelectorWheel;
  private boolean mHideWheelUntilFocused;
  private Drawable mSelectionDivider;

  private void getMyValue() {
    mLeft = super.getLeft();
    mRight = super.getRight();
    mBottom = super.getBottom();
    Field[] pickerFields = NumberPicker.class.getDeclaredFields();
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mSelectorWheelPaint")) {
        try {
          mSelectorWheelPaint = (Paint) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mSelectorElementHeight")) {
        try {
          mSelectorElementHeight = (int) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mCurrentScrollOffset")) {
        try {
          mCurrentScrollOffset = (int) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mInputText")) {
        try {
          mInputText = (EditText) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mSelectorIndexToStringCache")) {
        try {
          mSelectorIndexToStringCache = (SparseArray<String>) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mSelectorIndices")) {
        try {
          mSelectorIndices = (int[]) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mHasSelectorWheel")) {
        try {
          mHasSelectorWheel = (boolean) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mHideWheelUntilFocused")) {
        try {
          mHideWheelUntilFocused = (boolean) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mScrollState")) {
        try {
          mScrollState = (int) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mTopSelectionDividerTop")) {
        try {
          mTopSelectionDividerTop = (int) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mBottomSelectionDividerBottom")) {
        try {
          mBottomSelectionDividerBottom = (int) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }
    for (Field field : pickerFields) {
      field.setAccessible(true);
      if (field.getName().equals("mSelectionDivider")) {
        try {
          mSelectionDivider = (Drawable) field.get(picker);
        } catch (IllegalAccessException e) {
          e.printStackTrace();
        }
        break;
      }
    }

  }

  @Override
  protected void onDraw(Canvas canvas) {
    getMyValue();
    mSelectorWheelPaint.setColor(Color.BLUE);
    mSelectorWheelPaint.setAlpha(1);

    if (!mHasSelectorWheel) {
      super.onDraw(canvas);
      return;
    }
    final boolean showSelectorWheel = mHideWheelUntilFocused ? hasFocus() : true;
    float x = (mRight - mLeft) / 2;
    float y = mCurrentScrollOffset;

    int[] selectorIndices = mSelectorIndices;
    for (int i = 0; i < selectorIndices.length; i++) {
      int selectorIndex = selectorIndices[i];
      String scrollSelectorValue = mSelectorIndexToStringCache.get(selectorIndex);
      if (i != 1) {
        mSelectorWheelPaint.setColor(Color.BLACK);
        mSelectorWheelPaint.setTextSize(sp2px(19));
      } else {
        mSelectorWheelPaint.setColor(Color.parseColor("#488AFF"));
        mSelectorWheelPaint.setTextSize(sp2px(22));
      }

      if ((showSelectorWheel && i != 1) ||
        (i == 1 && mInputText.getVisibility() != VISIBLE)) {
        Rect mRect = new Rect();
        mSelectorWheelPaint.getTextBounds(scrollSelectorValue, 0, scrollSelectorValue.length(), mRect);
        canvas.drawText(scrollSelectorValue, x, y, mSelectorWheelPaint);
      }
      y += mSelectorElementHeight;
    }
    mInputText.setTextColor(Color.parseColor("#488AFF"));
  }

  @Override
  protected float getTopFadingEdgeStrength() {
    return 0;
  }

  @Override
  protected float getBottomFadingEdgeStrength() {
    return 0;
  }

  private int sp2px(int sp){
    float scale = mContext.getResources().getDisplayMetrics().scaledDensity;
    return (int) (scale*sp+0.5f);
  }
}
