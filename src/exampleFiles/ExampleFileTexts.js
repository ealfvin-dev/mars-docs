const fileTexts = {
    'Example-4-1-config':
    `#  Lab Zeppelin
#  1234 Black Dog Rd,
#  Misty Mountain CA, 54321
    
    <Report-Number>  Example-4-1
    
     <Restraint-ID>  055
    <Unc-Restraint>  0.034
    
@SERIES
             <Date>  09 13 2020
    <Technician-ID>  019
       <Balance-ID>  003
    
  <Direct-Readings>  1
<Direct-Reading-SF>  1.0027
         <Check-ID>  054
            <Grams>  1

         <Position>  A1kg     1000 7.9436 0.000045
         <Position>  B1kg     1000 7.9926 0.000045  3.961
         <Position>  C1kg     1000 7.9435 0.000045
         <Position>  D1kg     1000 7.9926 0.000045  6.353

        <Design-ID>  112
           <Design>  1 -1  0  0
           <Design>  1  0 -1  0
           <Design>  1  0  0 -1
           <Design>  0  1 -1  0
           <Design>  0  1  0 -1
           <Design>  0  0  1 -1
           <Design>  1 -1  0  0
           <Design>  1  0 -1  0
           <Design>  1  0  0 -1
           <Design>  0  1 -1  0
           <Design>  0  1  0 -1
           <Design>  0  0  1 -1

        <Restraint>  0 1 0 1
   <Check-Standard>  0 -1 0 1
        <Pass-Down>  0 0 0 0

          <Sigma-w>  0.0013
          <Sigma-t>  0.0029

   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96
   <Environmentals>  22.80 732.86 59.96

  <Env-Corrections>  -0.3 0.9 0.7

  <Balance-Reading>  -6.7570
  <Balance-Reading>  0.0018	
  <Balance-Reading>  -9.1448	
  <Balance-Reading>  6.7572	
  <Balance-Reading>  -2.3888	
  <Balance-Reading>  -9.1465	
  <Balance-Reading>  -6.7574	
  <Balance-Reading>  0.0010	
  <Balance-Reading>  -9.1446	
  <Balance-Reading>  6.7592	
  <Balance-Reading>  -2.3887	
  <Balance-Reading>  -9.1477
`,
    'Example-4-1-out':
    `# Lab Zeppelin
# 1234 Black Dog Rd,
# Misty Mountain CA, 54321

REPORT_NUMBER  Example-4-1
RESTRAINT_ID  055

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
        T(˚C) P(mmHg) RH(%)  AIR DENSITY(g/cm)
1:     23.10  731.96  59.26  0.00114050
2:     23.10  731.96  59.26  0.00114050
3:     23.10  731.96  59.26  0.00114050
4:     23.10  731.96  59.26  0.00114050
5:     23.10  731.96  59.26  0.00114050
6:     23.10  731.96  59.26  0.00114050
7:     23.10  731.96  59.26  0.00114050
8:     23.10  731.96  59.26  0.00114050
9:     23.10  731.96  59.26  0.00114050
10:    23.10  731.96  59.26  0.00114050
11:    23.10  731.96  59.26  0.00114050
12:    23.10  731.96  59.26  0.00114050
AVE:   23.10  731.96  59.26  0.00114050
CORR:  -0.30    0.90   0.70

##BALANCE READINGS##
1:   -6.757
2:    0.0018
3:   -9.1448
4:    6.7572
5:   -2.3888
6:   -9.1465
7:   -6.7574
8:    0.001
9:   -9.1446
10:   6.7592
11:  -2.3887
12:  -9.1477

##METRICS##
      LOAD       A(I)     DELTA    OBS SENSITIVITY    AVE SENSITIVITY
      (g)        (mg)      (mg)           (mg/DIV)           (mg/DIV)
1:    1000   -5.89576  -0.00021            1.00270            1.00270
2:    1000   -0.00000   0.00025            1.00270            1.00270
3:    1000   -8.29035   0.00046            1.00270            1.00270
4:    1000    5.89415  -0.00114            1.00270            1.00270
5:    1000   -2.39559  -0.00033            1.00270            1.00270
6:    1000   -8.29024   0.00031            1.00270            1.00270
7:    1000   -5.89616  -0.00061            1.00270            1.00270
8:    1000   -0.00081  -0.00055            1.00270            1.00270
9:    1000   -8.29015   0.00066            1.00270            1.00270
10:   1000    5.89616   0.00086            1.00270            1.00270
11:   1000   -2.39549  -0.00023            1.00270            1.00270
12:   1000   -8.29145  -0.00089            1.00270            1.00270

##STATISTICS##
#F-TEST
ACCEPTED_SW  0.0013 MG
OBSERVED_SW  0.00071 MG
CRITICAL_F-VALUE  1.89
OBSERVED_F-VALUE  0.3
--------
| PASS |
--------

#T-TEST
ACCEPTED_CHECK_STANDARD_CORRECTION  2.392 MG
OBSERVED_CHECK_STANDARD_CORRECTION  2.395266 MG
ACCEPTED_ST  0.0029 MG
CRITICAL_T-VALUE  1.65
OBSERVED_T-VALUE  1.13
--------
| PASS |
--------

WEIGHT ID     NOMINAL    DENSITY      CCE         TRUE MASS    CORRECTION
                (g)      (g/cm)      (/˚C)              (g)          (mg)
-----------  ---------  ---------  ---------  -------------  ------------
A1kg           1000      7.94360   0.0000450   999.99806382      -1.93618
B1kg           1000      7.99260   0.0000450  1000.00395937       3.95937
C1kg           1000      7.94350   0.0000450   999.99806408      -1.93592
D1kg           1000      7.99260   0.0000450  1000.00635463       6.35463
`
}

export default fileTexts;