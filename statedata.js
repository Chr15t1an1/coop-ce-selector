
const stateMap = {
    AL: 'Alabama',
    AK: 'Alaska',
    AZ: 'Arizona',
    AR: 'Arkansas',
    CA: 'California',
    CO: 'Colorado',
    CT: 'Connecticut',
    DE: 'Delaware',
    DC: 'District Of Columbia',
    FL: 'Florida',
    GA: 'Georgia',
    HI: 'Hawaii',
    ID: 'Idaho',
    IL: 'Illinois',
    IN: 'Indiana',
    IA: 'Iowa',
    KS: 'Kansas',
    KY: 'Kentucky',
    LA: 'Louisiana',
    ME: 'Maine',
    MD: 'Maryland',
    MA: 'Massachusetts',
    MI: 'Michigan',
    MN: 'Minnesota',
    MS: 'Mississippi',
    MO: 'Missouri',
    MT: 'Montana',
    NE: 'Nebraska',
    NV: 'Nevada',
    NH: 'New Hampshire',
    NJ: 'New Jersey',
    NM: 'New Mexico',
    NY: 'New York',
    NC: 'North Carolina',
    ND: 'North Dakota',
    OH: 'Ohio',
    OK: 'Oklahoma',
    OR: 'Oregon',
    PA: 'Pennsylvania',
    RI: 'Rhode Island',
    SC: 'South Carolina',
    SD: 'South Dakota',
    TN: 'Tennessee',
    TX: 'Texas',
    UT: 'Utah',
    VT: 'Vermont',
    VA: 'Virginia',
    WA: 'Washington',
    WV: 'West Virginia',
    WI: 'Wisconsin',
    WY: 'Wyoming',
    PR:'Puerto Rico'
}


const requirements = {
    /* stage 1 */


    // NJ:{stateCE:'2nj',requiredHours:12,require8Hr:true},


    NJ: {stateCE:'2nj',requiredHours:12,require8Hr:true},
    NY: {stateCE:'3ny',requiredHours:11,require8Hr:true},
    OR: {stateCE:'2or',requiredHours:10,require8Hr:true},
    UT: {stateCE:'2ut',requiredHours:10,require8Hr:true},
    WA: {stateCE:'1a',requiredHours:9,require8Hr:true},

    /* stage 2 */
    AZ: {stateCE:'1az',requiredHours:8,require8Hr:false},
    CA: {stateCE:'1ca',requiredHours:8,require8Hr:false},
    CO: {stateCE:'1co',requiredHours:8,require8Hr:false},
    CT: {stateCE:'1ct',requiredHours:8,require8Hr:false},
    DC: {stateCE:'1dc',requiredHours:8,require8Hr:false},
    FL: {stateCE:'',requiredHours:8,require8Hr:false},
    GA: {stateCE:'1ga',requiredHours:8,require8Hr:false},
    HI: {stateCE:'1hi',requiredHours:8,require8Hr:false},
    ID: {stateCE:'1id',requiredHours:8,require8Hr:false},
    KY: {stateCE:'1ky',requiredHours:8,require8Hr:false},
    MD: {stateCE:'1md',requiredHours:8,require8Hr:false},
    MA: {stateCE:'1ma',requiredHours:8,require8Hr:false},
    MO: {stateCE:'1mo',requiredHours:8,require8Hr:false},
    NV: {stateCE:'3nv',requiredHours:8,require8Hr:false},
    NM: {stateCE:'1nm',requiredHours:8,require8Hr:false},
    NC: {stateCE:'1nc',requiredHours:8,require8Hr:false},
    PA: {stateCE:'1pa',requiredHours:8,require8Hr:false},
    RI: {stateCE:'1ri',requiredHours:8,require8Hr:false},
    WV: {stateCE:'1wv',requiredHours:8,require8Hr:false},

    /* stage 3 */

    AL: {stateCE:'',requiredHours:8,require8Hr:false},
    AK: {stateCE:'',requiredHours:8,require8Hr:false},
    AR: {stateCE:'',requiredHours:8,require8Hr:false},
    DE: {stateCE:'',requiredHours:8,require8Hr:false},
    IL: {stateCE:'',requiredHours:8,require8Hr:false},
    IN: {stateCE:'',requiredHours:8,require8Hr:false},
    IA: {stateCE:'',requiredHours:8,require8Hr:false},
    KS: {stateCE:'',requiredHours:8,require8Hr:false},
    LA: {stateCE:'',requiredHours:8,require8Hr:false},
    ME: {stateCE:'',requiredHours:8,require8Hr:false},
    MI: {stateCE:'',requiredHours:8,require8Hr:false},
    MN: {stateCE:'',requiredHours:8,require8Hr:false},
    MS: {stateCE:'',requiredHours:8,require8Hr:false},
    MT: {stateCE:'',requiredHours:8,require8Hr:false},
    NE: {stateCE:'',requiredHours:8,require8Hr:false},
    NH: {stateCE:'',requiredHours:8,require8Hr:false},
    ND: {stateCE:'',requiredHours:8,require8Hr:false},
    OH: {stateCE:'',requiredHours:8,require8Hr:false},
    OK: {stateCE:'',requiredHours:8,require8Hr:false},
    SC: {stateCE:'',requiredHours:8,require8Hr:false},
    SD: {stateCE:'',requiredHours:8,require8Hr:false},
    TN: {stateCE:'',requiredHours:8,require8Hr:false},
    TX: {stateCE:'',requiredHours:8,require8Hr:false},
    VT: {stateCE:'',requiredHours:8,require8Hr:false},
    VA: {stateCE:'',requiredHours:8,require8Hr:false},
    WI: {stateCE:'',requiredHours:8,require8Hr:false},
    WY: {stateCE:'',requiredHours:8,require8Hr:false},
    PR: {stateCE:'',requiredHours:8,require8Hr:false}
}



// const requirements = {
//     /* stage 1 */
//     NJ: {courses: ['8hr', '2nj'], extraHours: 2},
//     NY: {courses: ['8hr', '3ny'], require8Hr: true},
//     OR: {courses: ['8hr', '2or']},
//     UT: {courses: ['8hr', '2ut'], require8Hr: true},
//     WA: {courses: ['8hr', '1wa']},
//
//     /* stage 2 */
//     AZ: {courses: ['7hr', '1az']},
//     CA: {courses: ['7hr', '1ca']},
//     CO: {courses: ['7hr', '1co']},
//     CT: {courses: ['7hr', '1ct']},
//     DC: {courses: ['7hr', '1dc']},
//     FL: {courses: ['8hr', '1fl']},
//     GA: {courses: ['7hr', '1ga']},
//     HI: {courses: ['7hr', '1hi']},
//     ID: {courses: ['7hr', '1id']},
//     KY: {courses: ['7hr', '1ky']},
//     MD: {courses: ['7hr', '1md']},
//     MA: {courses: ['7hr', '1ma']},
//     MO: {courses: ['7hr', '1mo']},
//     NV: {courses: ['7hr', '3nv']},
//     NM: {courses: ['7hr', '1nm']},
//     NC: {courses: ['7hr', '1nc']},
//     PA: {courses: ['7hr', '1pa']},
//     RI: {courses: ['7hr', '1ri']},
//     WV: {courses: ['7hr', '1wv']},
//
//     /* stage 3 */
//     AL: {courses: ['8hr']},
//     AK: {courses: ['8hr']},
//     AR: {courses: ['8hr']},
//     DE: {courses: ['8hr']},
//     IL: {courses: ['8hr']},
//     IN: {courses: ['8hr']},
//     IA: {courses: ['8hr']},
//     KS: {courses: ['8hr']},
//     LA: {courses: ['8hr']},
//     ME: {courses: ['8hr']},
//     MI: {courses: ['8hr']},
//     MN: {courses: ['8hr']},
//     MS: {courses: ['8hr']},
//     MT: {courses: ['8hr']},
//     NE: {courses: ['8hr']},
//     NH: {courses: ['8hr']},
//     ND: {courses: ['8hr']},
//     OH: {courses: ['8hr']},
//     OK: {courses: ['8hr']},
//     SC: {courses: ['8hr']},
//     SD: {courses: ['8hr']},
//     TN: {courses: ['8hr']},
//     TX: {courses: ['8hr']},
//     VT: {courses: ['8hr']},
//     VA: {courses: ['8hr']},
//     WI: {courses: ['8hr']},
//     WY: {courses: ['8hr']}
// }







const allCourses = {
    '8hr': {
        name: '8 Hour Core SAFE Online CE',
        variantId: 23491638849,
        hours: 8
    },
    '7hr': {
        name: '7 Hour Core SAFE Online CE',
        variantId: 23491539329,
        hours: 7
    },

    /* '2ms': {
        name: 'Mississippi 2 hour Online CE',
        variantId: 22247503553,
        hours: 2
    },*/
    '2nj': {
        name: 'New Jersey 2 Hour Online CE',
        variantId: 23492590465,
        hours: 2
    },
    '3ny': {
        name: 'New York 3 Hour Online CE',
        variantId: 23492722241,
        hours: 3
    },
    '2or': {
        name: 'Oregon 2 Hour Online CE',
        variantId: 23554563009,
        hours: 2
    },
    '2ut': {
        name: 'Utah 2 Hour Online CE',
        variantId: 23554432065,
        hours: 2
    },
    '1wa': {
        name: 'Washington 1 Hour Online CE',
        variantId: 23554387265,
        hours: 1
    },


    '1az': {
        name: 'Arizona 1 Hour Online CE',
        variantId: 23491813505,
        hours: 1,
    },
    '1ca': {
        name: 'California-DBO 1 Hour online CE',
        variantId: 23491962753,
        hours: 1,
    },
    '1co': {
        name: 'Colorado 1 Hour Online CE',
        variantId: 23492014209,
        hours: 1,
    },
    '1ct': {
        name: 'Connecticut 1 Hour Online CE',
        variantId: 23492073025,
        hours: 1,
    },
    '1dc': {
        name: 'DC 1 Hour Online CE',
        variantId: 23492216001,
        hours: 1,
    },
    '1fl': {
        name: 'FL 1 Hour Online CE',
        variantId: 38746042381,
        hours: 1,
    },
    '1ga': {
        name: 'Georgia 1 Hour Online CE',
        variantId: 23492283329,
        hours: 1,
    },
    '1hi': {
        name: 'Hawaii 1 Hour Online CE',
        variantId: 23492321665,
        hours: 1,
    },
    '1id': {
        name: 'Idaho 1 Hour Online CE',
        variantId: 23492364033,
        hours: 1,
    },
    "1ky": {
        name: "Kentucky 1 Hour Online CE",
        variantId: 26584164289,
        hours: 1
    },
    '1md': {
        name: 'Maryland 1 Hour Online CE',
        variantId: 23492392961,
        hours: 1,
    },
    '1ma': {
        name: 'Massachusetts 1 Hour Online CE',
        variantId: 23492422721,
        hours: 1,
    },
    '1mo': {
        name: 'Missouri 1 Hour Online CE',
        variantId: 23492531457,
        hours: 1,
    },
    '3nv': {
        name: 'Nevada 3 Hour Online CE',
        variantId: 23492564097,
        hours: 3,
    },
    '1nm': {
        name: 'New Mexico 1 Hour Online CE',
        variantId: 23492624065,
        hours: 1,
    },
    '1nc': {
        name: 'North Carolina 1 Hour Online CE',
        variantId: 23554597569,
        hours: 1,
    },
    '1pa': {
        name: 'Pennsylvania 1 Hour Online CE',
        variantId: 23554504577,
        hours: 1,
    },
    '1ri': {
        name: 'Rhode Island 1 Hour Online CE',
        variantId: 23554483137,
        hours: 1,
    },
    '1wv': {
        name: 'West Virginia 1 Hour Online CE',
        variantId: 23554357121,
        hours: 1,
    }
}

// export {stateMap, requirements, allCourses}
