const example4In1Out = 
`# Lab Zeppelin
# 1234 Black Dog Rd,
# Misty Mountain CA, 54321

REPORT_NUMBER  Example-4-1
RESTRAINT_ID  055
RESTRAINT_UNC  0.034 mg

***SERIES 1***

DATE  09 13 2020

OPERATOR_ID  019
BALANCE_ID  003

RESTRAINT  B1kg+D1kg

CHECK_STANDARD_ID  054
CHECK_STANDARD  D1kg-B1kg

SENSITIVITY_WEIGHT_MASS  NA
SENSITIVITY_WEIGHT_DENSITY  NA
SENSITIVITY_WEIGHT_CCE  NA

DESIGN_ID  112
POSITIONS  4
OBSERVATIONS  12

##ENVIRONMENTALS (CORRECTED)##
     T(DEG C) P(mmHg) RH(%)  AIR DENSITY(g/cm)
1:     21.10  731.96  48.26  0.00115036
2:     21.10  731.96  48.26  0.00115036
3:     21.10  731.96  48.26  0.00115036
4:     21.10  731.96  48.26  0.00115036
5:     21.10  731.96  48.26  0.00115036
6:     21.10  731.96  48.26  0.00115036
7:     21.10  731.96  48.26  0.00115036
8:     21.10  731.96  48.26  0.00115036
9:     21.10  731.96  48.26  0.00115036
10:    21.10  731.96  48.26  0.00115036
11:    21.10  731.96  48.26  0.00115036
12:    21.10  731.96  48.26  0.00115036
AVE:   21.10  731.96  48.26  0.00115036
CORR:  -0.30    0.90   0.70

##BALANCE READINGS##
1:    6.757
2:   -0.0018
3:    9.1448
4:   -6.7572
5:    2.3888
6:    9.1465
7:    6.7574
8:   -0.001
9:    9.1446
10:  -6.7592
11:   2.3887
12:   9.1477

##METRICS##
      LOAD       A(I)     DELTA    OBS SENSITIVITY    AVE SENSITIVITY
      (g)        (mg)      (mg)           (mg/DIV)           (mg/DIV)
1:    1000   -5.88823  -0.00021            1.00270            1.00270
2:    1000   -0.00002   0.00025            1.00270            1.00270
3:    1000   -8.28283   0.00046            1.00270            1.00270
4:    1000    5.88661  -0.00114            1.00270            1.00270
5:    1000   -2.39559  -0.00033            1.00270            1.00270
6:    1000   -8.28271   0.00031            1.00270            1.00270
7:    1000   -5.88864  -0.00061            1.00270            1.00270
8:    1000   -0.00082  -0.00055            1.00270            1.00270
9:    1000   -8.28263   0.00066            1.00270            1.00270
10:   1000    5.88862   0.00086            1.00270            1.00270
11:   1000   -2.39549  -0.00023            1.00270            1.00270
12:   1000   -8.28391  -0.00089            1.00270            1.00270

##STATISTICS##
#F-TEST
ACCEPTED_SW  0.0013 mg
OBSERVED_SW  0.00071 mg
CRITICAL_F-VALUE  1.89
OBSERVED_F-VALUE  0.3
--------
| PASS |
--------

#T-TEST
ACCEPTED_CHECK_STANDARD_CORRECTION  2.392 mg
OBSERVED_CHECK_STANDARD_CORRECTION  2.395269 mg
CHECK_STANDARD_TYPE_A_UNC  0.002765 mg
CRITICAL_T-VALUE  1.96
OBSERVED_T-VALUE  1.18
--------
| PASS |
--------

ID     NOMINAL    DENSITY      CCE       TYPE A UNC    TYPE B UNC       TRUE MASS    CORRECTION
         (g)      (g/cm)     (/DEG C)       (mg)          (mg)                (g)          (mg)
----  ---------  ---------  ----------  ------------  ------------  -------------  ------------
A1kg    1000      7.94360   0.0000450     0.00239       0.01700      999.99807134      -1.92866
B1kg    1000      7.99260   0.0000450     0.00138       0.01700     1000.00395937       3.95937
C1kg    1000      7.94350   0.0000450     0.00239       0.01700      999.99807161      -1.92839
D1kg    1000      7.99260   0.0000450     0.00138       0.01700     1000.00635463       6.35463
`

export default example4In1Out;