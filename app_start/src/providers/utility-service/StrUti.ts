export class StrUti {

	public static isNothing(str) {
		return str == undefined || str == null || str == '';
	}
	public static strNullFormat(str) {
		if (str == '' || str == undefined) {
			str = null;
		}
		return str;
	}

}