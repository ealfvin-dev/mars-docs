import React from 'react';
import Header from '../../components/Header/Header';
import TagEntry from './TagEntry';

import '../pages.css';

function Tags() {
    return (
        <div>
            <Header />
            <div className='pageLayout'>
                <div className='textBlock'>
                    <h3>Tags</h3>
                    <p>
                        When building input files in the user interface, line tags are automatically
                        inserted on each line so you will not need to remember input tags. However,
                        a full list of input line tags and examples are included here for reference
                        in the order they are inserted in the input file. <br/><br/>
                    </p>
                    <TagEntry
                        tag="#"
                        description='
                            Any line that starts with a "#" will be ignored when the file is run. Any comments
                            and header information are on lines that begin with "#".'
                        example={[
                            "Lab Zeppelin",
                            "1234 Black Dog Rd,",
                            "Misty Mountain CA, 54321"
                        ]}
                    />

                    <TagEntry
                        tag="<Report-Number>"
                        description="The report number of the calibration. Alphanumeric."
                        example={["123456b"]}
                    />

                    <TagEntry
                        tag="<Restraint-ID>"
                        description="The id of the starting restraint. Alphanumeric."
                        example={["024"]}
                    />

                    <TagEntry
                        tag="<Unc-Restraint>"
                        description="The uncertainty of the starting restraint in mg. Numeric."
                        example={["0.062"]}
                    />

                    <TagEntry
                        tag="@SERIES"
                        description="Delimiter that marks the beginning of data specific to each series. Comes before the <Date> tag."
                        example={[""]}
                    />

                    <TagEntry
                        tag="<Date>"
                        description="The date of the calibration. MM DD YYYY."
                        example={["07 28 2020"]}
                    />

                    <TagEntry
                        tag="<Technician-ID>"
                        description="The id of the technician performing the calibration. Alphanumeric."
                        example={["019"]}
                    />

                    <TagEntry
                        tag="<Balance-ID>"
                        description="The id of the balance the calibration was performed on. Alphanumeric."
                        example={["004"]}
                    />

                    <TagEntry
                        tag="<Direct-Readings>"
                        description="Indicator of the type of balace readings.
                        1 = Direct readings (a values) supplied, 0 = Double substitution readings supplied. Numeric 0 or 1."
                        example={["1"]}
                    />

                    <TagEntry
                        tag="<Direct-Reading-SF>"
                        description="The sensitivity factor of the balance if direct readings are supplied, in mg/div. Numeric."
                        example={["1.0027"]}
                    />

                    <TagEntry
                        tag="<Gravity-Grad>"
                        description={"(Optional) If using gravity corrections, the local gravity gradient where the calibration was performed, in 1/s\u00B2. Numeric."}
                        example={["0.0000031"]}
                    />

                    <TagEntry
                        tag="<Gravity-Local>"
                        description={"(Optional) If using gravity corrections, the local acceleration of gravity, in m/s\u00B2. Numeric."}
                        example={["9.783"]}
                    />

                    <TagEntry
                        tag="<Height>"
                        description="(Optional) If using gravity corrections, the height of the center of mass of each weight, in cm. Numeric."
                        example={["2.4"]}
                    />

                    <TagEntry
                        tag="<Check-ID>"
                        description="The id of the check standard. Alphanumeric."
                        example={["025"]}
                    />

                    <TagEntry
                        tag="<Grams>"
                        description="Indicator of the units for nominal masses. 1 = nominals in grams, 0 = nominals in pounds.
                        If pounds are used, only the weight nominals are entered in pounds and everything else remains in metric units. Numeric 0 or 1."
                        example={["1"]}
                    />

                    <TagEntry
                        tag="<Position>"
                        description={`Positional information for each weight in the calibration:
                        ID,  Nominal,  Density,  CCE,  (Correction). Weight ids are alphanumeric without spaces. Nominals are numeric in grams or pounds, as
                        determined by <Grams>. Densities are numeric in g/cm\u00B3. CCEs are numeric in /\u00B0C. Corrections are numeric in mg.`}
                        example={[
                            "A1kg    1000  7.9436  0.000045",
                            "B1kg    1000  7.9926  0.000045  3.961",
                            "C1kg    1000  7.9435  0.000045",
                            "D1kg    1000  7.9926  0.000045  6.353"
                        ]}
                    />

                    <TagEntry
                        tag="<Design-ID>"
                        description="The id of the calibration weighing design. Alphanumeric."
                        example={["112"]}
                    />

                    <TagEntry
                        tag="<Design>"
                        description="Design matrix for the calibration. Numeric -1, 0 and 1."
                        example={[
                            "1 -1  0  0",
                            "1  0 -1  0",
                            "1  0  0 -1",
                            "0  1 -1  0",
                            "0  1  0 -1",
                            "0  0  1 -1"
                        ]}
                    />

                    <TagEntry
                        tag="<Restraint>"
                        description="The position of the restriant in the calibration. Numeric 0 and 1."
                        example={["1 0 1 0"]}
                    />

                    <TagEntry
                        tag="<Check-Standard>"
                        description="The position of the check standard in the calibration. Numeric -1, 0 and 1."
                        example={["1 0 -1 0"]}
                    />

                    <TagEntry
                        tag="<Pass-Down>"
                        description="The position of the weight(s) to be passed down as the restraint in the next series. Numeric 0 and 1."
                        example={["0 0 0 1"]}
                    />

                    <TagEntry
                        tag="<Sigma-t>"
                        description="The long-term standard deviation of the calibration, in mg. Numeric."
                        example={["0.033"]}
                    />

                    <TagEntry
                        tag="<Sigma-w>"
                        description="The within-process standard deviation of the calibration, in mg. Numeric."
                        example={["0.017"]}
                    />

                    <TagEntry
                        tag="<Environmentals>"
                        description={`Environmental readings for each <Balance-Reading> line in the calibration:
                        Temperature (\u00B0C), Pressure (mmHg), Relative Humidity (%). If you do not want to do
                        line-by-line air buoyancy corrections then all environmental lines will be the same. Numeric.`}
                        example={[
                            "19.74 740.1 45.6",
                            "19.81 740.1 45.7",
                            "19.83 740.2 45.6",
                            "19.80 740.3 45.7",
                            "19.76 740.3 45.8",
                            "19.75 740.4 45.8"
                        ]}
                    />

                    <TagEntry
                        tag="<Env-Corrections>"
                        description={`The environmental corrections associated with the equipment used to take environmental readings:
                        Temperature Correction (\u00B0C), Pressure Correction (mmHg), Relative Humidity Correction (%). (If a thermometer
                        reads 20.1 \u00B0C when calibrated at 20.0 \u00B0C, then insert a correction of 0.1 \u00B0C). Numeric.`}
                        example={["0.1 0.0 -0.35"]}
                    />

                    <TagEntry
                        tag="<Balance-Reading>"
                        description="Balance readings for the calibration, in divisions. Either direct readings or double substitutions
                        depending on <Direct-Readings>. Numeric."
                        example={[
                            "-6.7570",
                            "0.0018",
                            "-9.1448",
                            "6.7572",
                            "-2.3888",
                            "-9.1465"
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default Tags;
