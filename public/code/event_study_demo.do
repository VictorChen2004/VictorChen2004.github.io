* Event-time specification on a synthetic respondent panel.
* The simulated coefficients are illustrative, not empirical findings.
clear all
set more off
set seed 20261029

set obs 240
generate int person_id = _n
generate int household_id = ceil(person_id / 2)
generate byte treated_group = mod(household_id, 2)
generate double base_weight = 0.5 + runiform()

expand 9
bysort person_id: generate int wave = 6 + _n
generate int event_time = wave - 12
generate double outcome = 0.30 + 0.01 * (wave - 7) + 0.03 * treated_group ///
    + 0.05 * treated_group * (event_time >= 0) + rnormal(0, 0.09)

* Wave 11 (event time -1) is the omitted period.
local event_terms ""
forvalues k = -5/3 {
    if `k' == -1 continue
    local suffix = cond(`k' < 0, "m" + string(abs(`k')), "p" + string(`k'))
    generate byte ev_`suffix' = treated_group == 1 & event_time == `k'
    local event_terms "`event_terms' ev_`suffix'"
}

* Individual effects absorb permanent treated-control differences. Cluster
* inference by household because synthetic respondents share that unit.
areg outcome `event_terms' i.wave [pw = base_weight], ///
    absorb(person_id) vce(cluster household_id)

* A pre-period joint test is a diagnostic, not proof of parallel trends.
test ev_m5 ev_m4 ev_m3 ev_m2
display as text "Pre-period joint-test p-value: " as result %5.3f r(p)

forvalues k = -5/3 {
    if `k' == -1 continue
    local suffix = cond(`k' < 0, "m" + string(abs(`k')), "p" + string(`k'))
    display as text "event time `k': " as result ///
        "coefficient = " %7.4f _b[ev_`suffix'] ///
        ", standard error = " %7.4f _se[ev_`suffix']
}
