/**
 * WBSEDCL BILL ESTIMATION AND BREAKDOWN
 * AUTHOR : ANOL KR GHOSH
 * DATE : 15/12/2020
 * Note : Default Rates Are Provided by Wbsedcl || May Change over periods of time.
 **/

class Calculator {
    constructor(data) {
        this._timestamp = new Date();
        this._date = this._timestamp.toLocaleDateString("en-IN");
        this._rate = [526, 586, 673, 723, 732, 899]; //[489,549,635,684,692,859];//[526, 586, 673, 723, 732, 899];
        this._value = data;
        this._totalKWH = 0;
        this._totalLoad = 0;
        this.findLoad();
        this.findKWH();
        this._dcost = this.per_day();
        this._cost = this.calculate_monthly_cost(this._totalKWH * 30);
        this._qcost = this.calculate_quarter_cost(this._totalKWH * 90);
    }
    set rates(rate) {
        this._rate = rate;
    }
    set totalKWH(unit) {
        this._totalKWH = unit;
    }

    findLoad() {
        for (let i = 0; i < this._value.length; i++) {
            this._totalLoad += parseFloat(this._value[i].load);
        }
        $('.tl').html(`Total Load : ${this._totalLoad} Watts`);
    }
    findKWH() {
        for (let i = 0; i < this._value.length; i++) {
            this._totalKWH += parseFloat(this._value[i].req_energy);
        }
        $('.tc').html(`Total Consumption : ${Math.round(this._totalKWH)} KWH`);
    }

    /**
     * 
     * @param {Integer} unit Monthly KWH Unit
     */
    calculate_monthly_cost(unit) {
        let cost = "";
        if (unit < 35) {
            cost = unit * this._rate[0];
        } else if (unit < 61 && unit > 34) {
            cost = 34 * this._rate[0] + (unit - 34) * this._rate[1];
        } else if (unit < 101 && unit > 60) {
            cost = 34 * this._rate[0] + 26 * this._rate[1] + (unit - 60) * this._rate[2];
        } else if (unit < 201 && unit > 100) {
            cost = 34 * this._rate[0] + 26 * this._rate[1] + 40 * this._rate[2] + (unit - 100) * this._rate[3];
        } else if (unit < 301 && unit > 200) {
            cost = 34 * this._rate[0] + 26 * this._rate[1] + 40 * this._rate[2] + 100 * this._rate[3] + (unit - 200) * this._rate[4];
        } else if (unit > 300) {
            cost = 34 * this._rate[0] + 26 * this._rate[1] + 40 * this._rate[2] + 100 * this._rate[3] + 100 * this._rate[4] + (unit - 300) * this._rate[5];
        }

        return cost / 100;
    }

    /**
     * 
     * @param {Integer} unit Quarter KWN Unit 
     */
    calculate_quarter_cost(unit) {
        let cost = "";
        if (unit < 103) {
            cost = unit * this._rate[0];
        } else if (unit < 181 && unit > 102) {
            cost = 102 * this._rate[0] + (unit - 102) * this._rate[1];
        } else if (unit < 301 && unit > 180) {
            cost = 102 * this._rate[0] + 78 * this._rate[1] + (unit - 180) * this._rate[2];
        } else if (unit < 601 && unit > 300) {
            cost = 102 * this._rate[0] + 78 * this._rate[1] + 120 * this._rate[2] + (unit - 300) * this._rate[3];
        } else if (unit < 901 && unit > 600) {
            cost = 102 * this._rate[0] + 78 * this._rate[1] + 120 * this._rate[2] + 300 * this._rate[3] + (unit - 600) * this._rate[4];
        } else if (unit > 900) {
            cost = 102 * this._rate[0] + 78 * this._rate[1] + 120 * this._rate[2] + 300 * this._rate[3] + 300 * this._rate[4] + (unit - 900) * this._rate[5];
        }

        return cost / 100;
    }

    per_day() {
        let Q_KWH = this._totalKWH * 90;
        let M_KWH = this._totalKWH * 30;
        let Q_pd = this.calculate_quarter_cost(Q_KWH);
        let M_pd = this.calculate_monthly_cost(M_KWH);
        Q_pd = Q_pd / 90;
        M_pd = M_pd / 30;
        return [{
            'Monthly Basis / Day': M_pd,
            'Quarterly Basis / Day': Q_pd
        }];
    }

    data() {
        let data = [{
            'monthly': this._cost,
            'quarterly': this._qcost,
            'daily': this._dcost
        }];
        return data;
    }


}
export default Calculator