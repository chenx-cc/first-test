export class UtilityService {

    public static formatDate(date) {
        var year = date.getFullYear()
        var month = date.getMonth() + 1
        var day = date.getDate()

        return [year, month, day].map(this.formatNumber).join('-');
    }

    public static formatTime(hh, mm, ss) {
        return this.formatNumber(hh) + ':' + this.formatNumber(mm) + ':' + this.formatNumber(ss)
    }

    public static fmtSysDateTime(now) {
        let stime = now.toISOString();
        return stime.replace(/[-T:]/g, '').substr(0, 14);
    }

    public static formatNumber(n) {
        n = n.toString()
        return n[1] ? n : '0' + n
    }

    public static setISODateTime() {
        Date.prototype.toISOString = function () {
            function pad(number) {
                if (number < 10) {
                    return '0' + number;
                }
                return number;
            }
            return this.getUTCFullYear() +
                '-' + pad(this.getUTCMonth() + 1) +
                '-' + pad(this.getUTCDate()) +
                'T' + pad(this.getUTCHours()) +
                ':' + pad(this.getUTCMinutes()) +
                ':' + pad(this.getUTCSeconds()) +
                '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
                'Z';
        }
    }

    public static setISODateTimeWithZone() {
        Date.prototype.toISOString = function () {
            var tzo = -this.getTimezoneOffset(),
                dif = tzo >= 0 ? '+' : '-',
                pad = function (num) {
                    var norm = Math.floor(Math.abs(num));
                    return (norm < 10 ? '0' : '') + norm;
                };
            return this.getFullYear() +
                '-' + pad(this.getMonth() + 1) +
                '-' + pad(this.getDate()) +
                'T' + pad(this.getHours()) +
                ':' + pad(this.getMinutes()) +
                ':' + pad(this.getSeconds()) +
                dif + pad(tzo / 60) +
                ':' + pad(tzo % 60);
        }
    }

    // 06:00 -> 06:00:00
    public static formatTimeString(timeString) {
        let tempDate = new Date();
        tempDate.setHours(timeString.substr(0, 2))
        tempDate.setMinutes(timeString.substr(3, 5))
        tempDate.setSeconds(0)
        return tempDate.toTimeString().substr(0, 8)
    }
}