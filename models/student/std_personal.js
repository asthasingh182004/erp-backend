import { connector } from './databaseUtil';

const studentPersonalSchema = {
    uid: {type: String, require: true},
    title:{type: String, required: true},
    firstName:{type: String, required: true},
    middleName:{type: String, required: true},
    motherName:{type: String, required: true},
    gender:{type: String, required: true},
    dob:{type: Date, required: true},
    age:{type: Number, required: true},
    birthPlace:{type: String, required: true},
    nationality:{type: String, required: true},
    motherTongue:{type: String, required: true},
    domicileState:{type: String, required: true},
    religion:{type: String, required: true},
    castCategory:{type: String, required: true},
    maharashtraKarnatakaBorderCandidate:{type: Boolean, required: true},
    castDescription:{type: String, required: true},
    subCasteDescription:{type: String, required: true},
    nonCreamyLayerCertificateAttached:{type: Boolean, required: true},
    hobby:{type: String, required: true},
    passportNo:{type: Number},
    bloodGroup:{type: String, required: true},
    physicallyHandicapped:{type: Boolean, required: true},
    studentMobNo:{type: Number, required: true},
    studentMail:{type: String, required: true},
    parentMobNo:{type: Number, required: true},
    parentMail:{type: String, required: true},
    perAddrDescr:{type: String, required: true},
    perPlotNo:{type: Number, required: true},
    perStreetName:{type: String, required: true},
    perStuAddr1:{type: String, required: true},
    perStuAddr2:{type: String},
    city:{type: String, required: true},
    percellphone:{type: Number, required: true},
    perpincode:{type: Number, required: true},
    perresiphone:{type: Number, required: true},
    permailaddress:{type: String, required: true},
    country:{type: String, required: true},
    state:{type: String, required: true},
    district:{type: String, required: true},
    tahsil:{type: String, required: true},
    correspondanceAddrDescr:{type: String},
    correspondancePlotNo:{type: Number},
    correspondanceStreetName:{type: String},
    correspondanceStuAddr1:{type: String},
    correspondanceStuAddr2:{type: String},
    correspondanceCity:{type: String},
    correspondanceCellPhone:{type: Number},
    correspondancePincode:{type: Number},
    correspondanceResiPhone:{type: Number},
    correspondanceMailAddress:{type: String},
    correspondanceCountry:{type: String},
    correspondanceState:{type: String},
    correspondanceDistrict:{type: String},
    correspondanceTahsil:{type: String},
    fatherDetails:{type: String, required: true},
    fathersOccupation:{type: String, required: true},
    parentsFirstName:{type: String, required: true},
    parentsMiddleName:{type: String, required: true},
    parentsLastName:{type: String, required: true},
    guardianMobNo:{type: Number},
    guardianMailId:{type: String},
    nameAsPerTc:{type: String},
    casteAsPerTc:{type: String},
    birthStatus:{type: String, required: true},
    maritalStatus:{type: Boolean, required: true},
    panCardNo:{type: Number},
    passportExpiry:{type: Date},
    drivingLicNo:{type: Number},
    drivingLicValidTo:{type: Date},
    aadharCardNo:{type: Number, required: true},
    electionCardNo:{type: Number},
    motherMobNo:{type: Number},
    motherEmailId:{type: String},
    parentIncome:{type: Number, required: true},
    photoUploaded:{type: Boolean, required: true},
    signUploaded:{type: Boolean, required: true},
    thumbUploaded:{type: Boolean, required: true},
    noOfDocumentsUploaded:{type: Number, required: true},
};

const stdPersonal = new connector.model('Student personal', studentPersonalSchema);