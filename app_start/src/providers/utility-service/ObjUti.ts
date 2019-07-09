import { StrUti } from '../../providers/utility-service/StrUti';
export class ObjUti {

	public static isUndef(obj) {
		return obj == undefined;
	}

	public static isNull(obj) {
		return obj == undefined || obj == null;
	}

	public static getLockObject(obj) {
		let opNm = obj['opNm']
		if (obj['opId'] != 0) {
			opNm = null
		}
		let lockObject = {
			'taskId': obj['taskId'], 'opId': obj['opId'],
			'opNm': opNm, 'workerId': obj['workerId'],
			'categoryId': obj['cgId'], 'storeNo': obj['storeNo'],
			'taskPoolKbn': obj['taskPoolKbn'], 'opCircle': obj['opCircle'],
			'planSDayTime': obj['planSTime'], 'planEDayTime': obj['planETime'],
			'actualSDayTime': obj['actualSTime'], 'actualEDayTime': obj['actualETime'],
			'status': obj['status'], 'alertKbn': obj['alertKbn'],
			'taskDate': obj['taskDate'], 'taskPriorityKbn': obj['taskPriorityKbn']
		}
		return lockObject;
	}

	public static getLockHandoverObject(obj) {
		let lockObject = {
			'handoverId': obj['handoverId'],
			'handoverContents': obj['handoverContents'],
			'handoverDate': obj['handoverDate'],
			'handoverWorkerId': obj['workerId'],
			'imgPath': obj['imgPath'],
			'timeSlotId': obj['timeSlotId'],
			'taskId': obj['taskId'],
			'date': obj['date']
		}
		return lockObject;
	}

	// タスク長さを追加
	public static addLen(obj, sTime, eTime) {
		let psTime, peTime, intShh, intSmm, intEhh, intEmm, apsTime, apeTime;
		let intaShh, intaSmm, intaEhh, intaEmm;
		// eTime = (parseInt(eTime) - 100).toString();
		if (obj.planSTime != null && obj.planSTime != "") {
			apsTime = obj.planSTime.substr(11, 8);
			psTime = obj.planSTime.substr(11, 8) < sTime ? sTime : obj.planSTime.substr(11, 8);
		}
		if (obj.planETime != null && obj.planETime != "") {
			apeTime = obj.planETime.substr(11, 8);
			peTime = obj.planETime.substr(11, 8) > eTime ? eTime : obj.planETime.substr(11, 8);
		}

		if (apsTime != null && apsTime != "") {
			intaShh = parseInt(apsTime.substr(0, 2));
			intaSmm = parseInt(apsTime.substr(3, 2));
		}
		if (apeTime != null && apeTime != "") {
			intaEhh = parseInt(apeTime.substr(0, 2));
			intaEmm = parseInt(apeTime.substr(3, 2));
		}

		let actLen = (intaEhh - intaShh) * 2 + (Math.ceil((intaEmm - intaSmm) / 30)) * 1;
		let acLine = (intaEhh - intaShh) * 2 + ((intaEmm - intaSmm) / 30) * 1;

		if (!(actLen > 1)) {
			actLen = 1;
		}

		if (psTime != null && psTime != "") {
			intShh = parseInt(psTime.substr(0, 2));
			intSmm = parseInt(psTime.substr(3, 2));
		}
		if (peTime != null && peTime != "") {
			intEhh = parseInt(peTime.substr(0, 2));
			intEmm = parseInt(peTime.substr(3, 2));
		}

		let tLen = (intEhh - intShh) * 2 + (Math.ceil((intEmm - intSmm) / 30)) * 1;
		if (!(tLen > 1)) {
			tLen = 1;
		}

		obj["actlen"] = actLen;
		obj["len"] = tLen;
		obj["taskStyle"] = tLen * 100 + '%';
		obj["topCStyle"] = acLine / tLen * 100 + '%';

		if (obj["status"] == 'I') {
			obj["topCStyleColor"] = '#78909C';
		} else {
			obj["topCStyleColor"] = '#78909C';
		}

		obj["top"] = '0px';
		obj["textFlag"] = true;

		if (tLen == 1) {
			obj["textFlag"] = false;
		}
	}

	public static mkTaskPos(categoryInfoList, slideList, stime, etime, intLen, positionFlg?, timeInSlideLen?) {
		categoryInfoList.forEach(category => {

			let taskObj = new Object();
			let posArray = new Array<Array<any>>();
			let initArray = new Array<any>();

			let intSTime = parseInt(stime);
			let intETime = parseInt(etime);
			let slot = intETime - intSTime;
			for (let index = 0; index < slot * 2; index++) {
				initArray[index] = 0;
			}
			let xArray = initArray.slice(0);
			let iSlide = 0;
			slideList.forEach(timeSlide => {
				let indTime = 0;
				timeSlide.forEach(timeItem => {
					category.halfHourList.forEach(hfInfo => {
						if (timeItem.timeO + ':00:00' == hfInfo.halfHour) {
							taskObj[hfInfo.halfHour] = hfInfo.taskInfoList;
							hfInfo.taskInfoList.forEach(task => {
								if ((task.status == 'E' && positionFlg == true) || (task.status == 'A' && positionFlg == true)) {
									return;
								}
								let top = 0;
								if (posArray.length == 0) {
									posArray.push(xArray);
								}
								for (let i = 0; i < task.len; i++) {
									let index = 0;
									if (i == 0) {
										for (let k = 0; k < posArray.length; k++) {
											index = k;
											xArray = posArray[k];
											let pos = xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + i];
											if (pos == 1) {
												top = top + 57;
												if (k == posArray.length - 1) {
													let xArray = initArray.slice(0);
													posArray.push(xArray);
													index = k + 1;
													break;
												} else {
													continue;
												}
											} else if (pos == 2) {
												top = 0;
												if (k == posArray.length - 1) {
													let xArray = initArray.slice(0);
													posArray.push(xArray);
													index = k + 1;
													break;
												} else {
													continue;
												}
											} else {
												break;
											}
										}
										xArray = posArray[index];
										xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + i] = 2;
									} else {
										xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + i] = 1;
									}
									task.top = top + 'px';
								}
							});
						}
						if (timeItem.timeO + ':30:00' == hfInfo.halfHour) {
							taskObj[hfInfo.halfHour] = hfInfo.taskInfoList;
							hfInfo.taskInfoList.forEach(task => {
								if ((task.status == 'E' && positionFlg == true) || (task.status == 'A' && positionFlg == true)) {
									return;
								}
								let top = 0;
								if (posArray.length == 0) {
									posArray.push(xArray);
								}
								for (let i = 0; i < task.len; i++) {
									let index = 0;
									if (i == 0) {
										for (let k = 0; k < posArray.length; k++) {
											index = k;
											xArray = posArray[k];
											let pos = xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + 1 + i];
											if (pos == 1) {
												top = top + 57;
												if (k == posArray.length - 1) {
													let xArray = initArray.slice(0);
													posArray.push(xArray);
													index = k + 1;
													break;
												} else {
													continue;
												}
											} else if (pos == 2) {
												top = 0;
												if (k == posArray.length - 1) {
													let xArray = initArray.slice(0);
													posArray.push(xArray);
													index = k + 1;
													break;
												} else {
													continue;
												}
											} else {
												break;
											}
										}
										xArray = posArray[index];
										xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + 1 + i] = 2;
									} else {
										xArray[iSlide * timeInSlideLen * 2 + indTime * 2 + 1 + i] = 1;
									}
								}
								task.top = top + 'px';
							});
						}
					});
					indTime = indTime + 1;
				});
				iSlide = iSlide + 1;
			});
			category['htask'] = taskObj;
			category['position'] = posArray;
			if (posArray.length * 57 > 228) {
				category['mheight'] = posArray.length * 57 + 'px';
				intLen = intLen + posArray.length * 57;
			} else {
				category['mheight'] = '228px';
				intLen = intLen + 228;
			}
		});
		return intLen;
	}

	public static getLockTaskInfo(obj) {
		let opNm = obj['opNm']
		if (obj['opId'] != 0) {
			opNm = null
		}
		let lockTaskInfo = {
			'taskId': obj['taskId'], 'opId': obj['opId'],
			'opNm': opNm, 'workerId': obj['workerId'],
			'categoryId': obj['cgId'], 'storeNo': obj['storeNo'],
			'taskPoolKbn': obj['taskPoolKbn'], 'taskPriorityKbn': obj['taskPriorityKbn'], 'opCircle': StrUti.strNullFormat(obj['opCircle']),
			'planSDayTime': StrUti.strNullFormat(obj['planSTime']), 'planEDayTime': StrUti.strNullFormat(obj['planETime']),
			'actualSDayTime': StrUti.strNullFormat(obj['actualSTime']), 'actualEDayTime': StrUti.strNullFormat(obj['actualETime']),
			'status': obj['status'], 'alertKbn': obj['alertKbn'],
			'taskDate': obj['taskDate']
		}
		return lockTaskInfo;
	}
}