# 2026 UC Berkeley Predoc Coding Task — Selected Examples

These small examples are adapted from the 2026 data task for Professor Ulrike Malmendier's Junior/Assistant Specialist application at UC Berkeley. They illustrate two research workflows: estimating an event-time model and checking a text-extraction rule against hand-coded labels. They are shared as a reference for similar predoc coding tasks, use only synthetic inputs, and are not the original submission or an answer key. Their numerical results are not research findings.

| File | Purpose | Run |
|---|---|---|
| `event_study_demo.do` | Generates a synthetic panel, estimates an event-time model with individual and wave effects, and tests the pre-event coefficients. | Run in Stata 16 or later. No external data or community packages are needed. |
| `validation_metrics.py` | Reports accuracy, false positives, false negatives, precision, and recall for frozen and revised text-extraction rules. | Run `python3 validation_metrics.py` from this folder. It reads `synthetic_validation.csv` and uses only Python's standard library. |
| `synthetic_validation.csv` | Fictional labels and predictions for the validation example. | Input for `validation_metrics.py`. |

The original survey data, obituary texts, hand-coded records, and full assessment package are not distributed here. The frozen/revised distinction matters: results from a rule set changed after inspecting the same labels are not an out-of-sample validation.
