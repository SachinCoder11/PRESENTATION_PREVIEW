# CONTENT ACCURACY & VERIFICATION AUDIT
## "FROM DATA TO PEOPLE POTENTIAL" — WEB PRESENTATION PACKAGE

**Event:** Imarticus Pan-India Data Science Hackathon (National Finals)  
**Presenter:** Sachin Dumbre  
**Evaluation Date:** 31 October 2026  
**Status:** National Finals Evaluation  
**Audit Standard:** Strict Primary Source Reconciled  

---

## 1. Verified Data Facts vs Disputed Figures

| Metric / Dimension | Raw Source Authority | Executed Notebook Cell | Verified Value | Discrepancy Note & Rectification |
|:---|:---|:---|:---:|:---|
| **Training Records** | `perf_train.csv` | Initial ingestion | **2,000 rows** | Fully verified. 20 features + ID + target. |
| **Test Records** | `perf_test.csv` | Initial ingestion | **500 rows** | Unlabelled test dataset. |
| **Target: Average Performer** | `perf_train.csv` | `value_counts()` | **1,129 (56.45%)** | Majority class baseline. |
| **Target: Low Performer** | `perf_train.csv` | `value_counts()` | **663 (33.15%)** | Secondary class. |
| **Target: High Performer** | `perf_train.csv` | `value_counts()` | **208 (10.40%)** | Severe minority class. Draft PDF previously showed 18.5%; corrected. |
| **Total Missing Cells** | `perf_train.csv` | `isna().sum().sum()` | **4,131 (10.33%)** | Across 40,000 feature cells. |
| **Top Missing 1: Internet_Stability** | `perf_train.csv` | Column missing count | **343 (17.15%)** | Highest sparsity feature. |
| **Top Missing 2: Absenteeism_Days** | `perf_train.csv` | Column missing count | **319 (15.95%)** | High operational sparsity. |
| **Top Missing 3: Certifications** | `perf_train.csv` | Column missing count | **305 (15.25%)** | Skill development sparsity. |
| **Top Missing 4: Training_Hours** | `perf_train.csv` | Column missing count | **298 (14.90%)** | Professional growth sparsity. |
| **Top Missing 5: Projects_Completed** | `perf_train.csv` | Column missing count | **288 (14.40%)** | Delivery record sparsity. |
| **`dropna()` Impact** | `perf_train.csv` | `dropna().shape` | **>70% data loss** | Confirmed. Dropping rows with any missing feature is fatal to statistical power. |
| **Dummy Classifier Baseline** | `Random_Forest.ipynb` | Cell 0 | **56.50%** | Predicts majority class (`Average`). |
| **Logistic Regression** | `Random_Forest.ipynb` | Cell 0 | **72.75%** | Confirms non-linear boundary requirement. |
| **Extra Trees Baseline** | `Random_Forest.ipynb` | Cell 1 | **80.00%** | **Audited Rectification:** Older ledger notes listed 87.25%. Direct execution in Cell 1 produced strictly 80.00% (Macro-F1: 0.5721). |
| **Random Forest (Tuned)** | `Random_Forest.ipynb` | Cell 1 | **87.50%** | 400 trees, balanced weights. |
| **XGBoost Baseline** | `Random_Forest.ipynb` | Cell 1 | **88.75%** | Standard gradient boosted trees. |
| **Tuned XGBoost** | `Random_Forest.ipynb` | Cell 1 | **88.50%** | Hyperparameter grid search. |
| **CatBoost Champion** | `Random_Forest.ipynb` | Cell 1 & 3 | **89.75%** | Symmetric decision trees. Holdout Macro-F1: **0.8484**. |
| **CatBoost 5-Fold CV** | `Random_Forest.ipynb` | Cell 1 | **88.60% ± 1.93%** | 5-Fold Stratified CV Mean (Macro-F1: **0.8313**). |
| **Feature Engineering Impact** | `Random_Forest.ipynb` | Cell 2 | **CV dropped to 88.15%** | Interaction ratios created collinearity; rejected. |
| **Soft-Voting Ensemble** | `Random_Forest.ipynb` | Cell 2 | **89.75% (+0.00 pp)** | Zero gain over standalone CatBoost; rejected. |
| **The 96.50% Refit Anomaly** | `Random_Forest.ipynb` | Cell 2 vs Cell 3 | **In-sample artifact** | Cell 1 refitted on all 2,000 rows. Clean holdout in Cell 3 proved genuine score is 89.75%. |
| **Decision Multipliers** | `Random_Forest.ipynb` | Threshold Grid | `[0.90, 1.20, 1.00]` | Lifted OOF accuracy from 87.94% to 88.31%. |
| **Competition Score** | Portal Leaderboard | Final Submission | **~87 points** | Transparently designated as *leaderboard points*, never claimed as 87% test accuracy. |

---

## 2. Scientific & Ethical Language Guardrails

To maintain rigorous data science ethics, the following linguistic rules are strictly enforced across all 8 slides, notes, and documentation:

1. **Correlation vs Causality**:
   - *Prohibited:* "Overtime causes lower performance" or "Laptop issues cause employees to fail."
   - *Mandated:* "Observational data reflects statistical correlation. Features like overtime hours and laptop issue frequency serve as diagnostic inquiry triggers for supportive management."
2. **Burnout & Health Disclaimers**:
   - *Prohibited:* "The model detects burnout" or "The model diagnoses mental fatigue."
   - *Mandated:* "The model classifies performance categories from historical operational logs; it has no clinical diagnostic capability."
3. **Attrition Predictions**:
   - *Prohibited:* "The model predicts employee turnover or attrition."
   - *Mandated:* "Voluntary retention is a proposed KPI to be monitored during a future controlled pilot."
4. **Financial ROI Framing**:
   - *Prohibited:* "Our solution saved $500,000" or "Measured business ROI achieved."
   - *Mandated:* "The ROI formula $\text{ROI} = (\text{Net Benefit} / \text{Intervention Costs}) \times 100\%$ represents a proposed future evaluation model for a voluntary 6-month corporate pilot, not historical realized gains."
5. **No Automated Disciplinary Actions**:
   - *Mandated:* "Human review is non-negotiable. Predictions are restricted to confidential HRBP development workflows to protect employee dignity."
