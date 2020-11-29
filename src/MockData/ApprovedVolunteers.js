const registeredVolunteers = [
  {
    id: 1,
    firstName: 'עומר',
    lastName: 'בלום',
    phoneNumber: '0548543775',
    age: '15',
    city: 'תל אביב יפו',
    street: 'דובנוב 12',
    kosher: 'False',
    parve: 'False',
    vegan: 'True',
    sugerfree: 'False',
    lactosefree: 'False',
    glutenfree: 'True',
    peanutfree: 'False',
    nutsfree: 'True',
    howoften: '1',
    permissions: '3',
    avoidance:'',
    howyouheardofus:'שמעתי מחבר',
    strikes:'2',
    comments:'',
    VolunteeringTimes: '4',
  },
  {
    firstName: 'אורי',
    lastName: 'מולכו',
    phoneNumber: '0534445868',
    age: '23',
    city: 'תל אביב יפו',
    street: 'יצחק טבנקין 7',
    kosher: 'True',
    parve: 'True',
    vegan: 'False',
    sugerfree: 'True',
    lactosefree: 'False',
    glutenfree: 'False',
    peanutfree: 'True',
    nutsfree: 'True',
    howoften: '2',
    permissions: '0',
    avoidance:'',
    howyouheardofus:'מדיה חברתית',
    strikes:'0',
    comments:'',
    VolunteeringTimes: '11'
  },
  {
    id: 3,
    firstName: 'שלי',
    lastName: 'כץ',
    phoneNumber: '0544395886',
    age: '20',
    city: 'כפר סבא',
    street: 'הגליל 8',
    kosher: 'False',
    parve: 'True',
    vegan: 'True',
    sugerfree: 'True',
    lactosefree: 'True',
    glutenfree: 'True',
    peanutfree: 'True',
    nutsfree: 'True',
    howoften: '1',
    permissions: '4',
    avoidance:'',
    howyouheardofus:'שמעתי מחבר',
    strikes:'1',
    comments:'',
    VolunteeringTimes: '55'
  },
  {
    id: 4,
    firstName: 'ליאור',
    lastName: 'טל',
    phoneNumber: '0523459632',
    age: '30',
    city: 'חיפה',
    street: 'וילנסקי 4',
    kosher: 'False',
    parve: 'False',
    vegan: 'False',
    sugerfree: 'False',
    lactosefree: 'False',
    glutenfree: 'False',
    peanutfree: 'False',
    nutsfree: 'False',
    howoften: '1',
    permissions: '2',
    avoidance:'',
    howyouheardofus:'מדיה חברתית',
    strikes:'2',
    comments:'',
    VolunteeringTimes: '80'
  },
  {
    id: 5,
    firstName: 'ישראלי',
    lastName: 'ישראלי',
    phoneNumber: '0543691221',
    age: '28',
    city: 'חיפה',
    street: 'הפרחים 5',
    kosher: 'False',
    parve: 'False',
    vegan: 'True',
    sugerfree: 'False',
    lactosefree: 'True',
    glutenfree: 'False',
    peanutfree: 'True',
    nutsfree: 'True',
    howoften: '3',
    permissions: '2',
    avoidance:'',
    howyouheardofus:'אחר',
    strikes:'0',
    comments:'',
    VolunteeringTimes: '61'
  },
  {
    id: 6,
    firstName: 'שלומציון',
    lastName: 'המלכה',
    phoneNumber: '0523465581',
    age: '24',
    city: 'תל אביב יפו',
    street: 'רוטשילד 16',
    kosher: 'True',
    parve: 'True',
    vegan: 'True',
    sugerfree: 'True',
    lactosefree: 'False',
    glutenfree: 'False',
    peanutfree: 'False',
    nutsfree: 'False',
    howoften: '2',
    permissions: '3',
    avoidance:'',
    howyouheardofus:'כתבה',
    strikes:'3',
    comments:'',
    VolunteeringTimes: '4'
  },
  {
    id: 7,
    firstName: 'מרים',
    lastName: 'החשמונאית',
    phoneNumber: '0523465581',
    age: '24',
    city: 'תל אביב יפו',
    street: 'רוטשילד 16',
    kosher: 'True',
    parve: 'True',
    vegan: 'True',
    sugerfree: 'True',
    lactosefree: 'False',
    glutenfree: 'False',
    peanutfree: 'False',
    nutsfree: 'False',
    howoften: '2',
    permissions: '3',
    avoidance:'',
    howyouheardofus:'כתבה',
    strikes:'3',
    comments:'',
    VolunteeringTimes: '8'
  },
  {
    id: 8,
    firstName: 'מנחם',
    lastName: 'בגין',
    phoneNumber: '0523465581',
    age: '24',
    city: 'תל אביב יפו',
    street: 'רוטשילד 16',
    kosher: 'True',
    parve: 'True',
    vegan: 'True',
    sugerfree: 'True',
    lactosefree: 'False',
    glutenfree: 'False',
    peanutfree: 'False',
    nutsfree: 'False',
    howoften: '2',
    permissions: '3',
    avoidance:'',
    howyouheardofus:'כתבה',
    strikes:'3',
    comments:'',
    VolunteeringTimes: '5'
  },
  {
    id: 9,
    firstName: 'גולדה',
    lastName: 'מאיר',
    phoneNumber: '0523465581',
    age: '24',
    city: 'תל אביב יפו',
    street: 'רוטשילד 16',
    kosher: 'True',
    parve: 'True',
    vegan: 'True',
    sugerfree: 'True',
    lactosefree: 'False',
    glutenfree: 'False',
    peanutfree: 'False',
    nutsfree: 'False',
    howoften: '2',
    permissions: '3',
    avoidance:'',
    howyouheardofus:'כתבה',
    strikes:'3',
    comments:'',
    VolunteeringTimes: '3'
  },
  {
    id: 10,
    firstName: 'אריאל',
    lastName: 'שרון',
    phoneNumber: '0523465581',
    age: '24',
    city: 'תל אביב יפו',
    street: 'רוטשילד 16',
    kosher: 'True',
    parve: 'True',
    vegan: 'True',
    sugerfree: 'True',
    lactosefree: 'False',
    glutenfree: 'False',
    peanutfree: 'False',
    nutsfree: 'False',
    howoften: '2',
    permissions: '3',
    avoidance:'',
    howyouheardofus:'כתבה',
    strikes:'3',
    comments:'',
    VolunteeringTimes: '1'
  },
  {
    id: 11,
    firstName: 'ציפי',
    lastName: 'שביט',
    phoneNumber: '0523465581',
    age: '24',
    city: 'תל אביב יפו',
    street: 'רוטשילד 16',
    kosher: 'True',
    parve: 'True',
    vegan: 'True',
    sugerfree: 'True',
    lactosefree: 'False',
    glutenfree: 'False',
    peanutfree: 'False',
    nutsfree: 'False',
    howoften: '2',
    permissions: '3',
    avoidance:'',
    howyouheardofus:'כתבה',
    strikes:'3',
    comments:'',
    VolunteeringTimes: '1'
  },
  {
    id: 12,
    firstName: 'רון',
    lastName: 'רונסון',
    phoneNumber: '0523465581',
    age: '24',
    city: 'תל אביב יפו',
    street: 'רוטשילד 16',
    kosher: 'True',
    parve: 'True',
    vegan: 'True',
    sugerfree: 'True',
    lactosefree: 'False',
    glutenfree: 'False',
    peanutfree: 'False',
    nutsfree: 'False',
    howoften: '2',
    permissions: '3',
    avoidance:'',
    howyouheardofus:'כתבה',
    strikes:'3',
    comments:'',
    VolunteeringTimes: '1'
  },

];

export default registeredVolunteers;