import React, { FC } from 'react'
import { connect } from 'react-redux'
import Index from '../../@types/IndexType'
import State from '../../@types/State'
import theme from '../../selectors/theme'

export interface IconProps {
  dark?: boolean
  fill?: string
  size?: number
  style?: Index<string | number>
}

// eslint-disable-next-line jsdoc/require-jsdoc
const mapStateToProps = (state: State) => ({
  dark: theme(state) !== 'Light',
})

// eslint-disable-next-line jsdoc/require-jsdoc
const InvitesIcon: FC<IconProps> = ({ dark, fill, size = 20, style }) => (
  <svg
    className='icon'
    x='0px'
    y='0px'
    viewBox='0 0 19 20'
    width={size}
    height={size}
    fill={fill || (dark ? 'white' : 'black')}
    style={style}
  >
    <g>
      <path d='M18.1061311,3.74615853 L15.3500762,2.60577404 C15.6188537,1.823513 15.3363925,0.957857703 14.6579642,0.484667665 C13.979536,0.011477626 13.0695971,0.0454578165 12.4283502,0.56792898 L11.7813578,1.12921905 L9.05306557,0 L6.32447161,1.12921905 L5.66933143,0.562195372 C5.02780899,0.0394584915 4.11706754,0.00665269963 3.43959754,0.481878191 C2.76212753,0.957103682 2.48293251,1.82461527 2.75605493,2.60577404 L0,3.74615853 L0,6.27528328 L0.603537704,6.48350379 L0.603537704,15.022657 L9.05306557,18.152 L17.5025934,15.022657 L17.5025934,6.48259848 L18.1061311,6.27437798 L18.1061311,3.74615853 Z M12.8152178,1.03235124 C13.198439,0.724488891 13.7264296,0.669561269 14.1648135,0.891950864 C14.6031975,1.11434046 14.8707328,1.57283365 14.8486599,2.06390435 C14.826587,2.55497505 14.5189965,2.98761719 14.0624285,3.16978002 L11.4451873,4.05034153 C11.436451,4.00470758 11.4245527,3.95973619 11.4095785,3.91575263 L11.4074662,3.91001902 C11.2349685,3.50891314 10.9088808,3.19369502 10.5021596,3.03488935 L12.8152178,1.03235124 Z M13.8813672,15.7191395 L12.6742918,16.1660592 L12.6742918,6.18656324 L10.9448545,5.19857202 C11.1151626,5.07106051 11.2546024,4.90686809 11.352846,4.718156 L11.6045212,4.63335896 L13.8813672,5.93368094 L13.8813672,15.7191395 Z M6.75449222,4.71845777 C6.85288205,4.90663497 6.99194324,5.07053956 7.1615784,5.19827025 L5.43183934,6.18656324 L5.43183934,16.1660592 L4.22476393,15.7191395 L4.22476393,5.93368094 L6.50130815,4.63335896 L6.75449222,4.71845777 Z M8.18578189,3.46490996 C8.21444993,3.45646043 8.24341974,3.44861444 8.27329485,3.44137199 C8.78669923,3.31342848 9.32365667,3.31342848 9.83706105,3.44137199 L9.8578831,3.44680383 C10.3636477,3.57746974 10.7372375,3.82914497 10.8380283,4.11069531 L10.8380283,4.11069531 L10.8380283,4.11401476 C10.8542907,4.15737283 10.8629676,4.2032069 10.8636853,4.24950898 C10.8639535,4.29481373 10.8556601,4.33976198 10.8392354,4.3819855 C10.8340087,4.39878947 10.8276572,4.41522269 10.820224,4.43117383 C10.6979734,4.64436443 10.5073189,4.81003077 10.2791524,4.9013297 C10.2607445,4.91008099 10.2420348,4.91853052 10.2230234,4.92698005 L10.2212128,4.92698005 L10.2212128,4.92698005 C10.0674169,4.995027 9.90704088,5.0471037 9.74260739,5.08239101 C9.51601102,5.13111899 9.28484131,5.1553994 9.05306557,5.15481553 C8.6724142,5.16013286 8.29438069,5.09114789 7.94014204,4.9517251 L7.88522011,4.92788536 L7.88310773,4.92788536 C7.60884064,4.83436044 7.38463415,4.63293429 7.2623692,4.37021652 C7.24860331,4.33148564 7.24185869,4.2906092 7.2424164,4.24950898 C7.24289186,4.2020295 7.2514655,4.15497654 7.26780104,4.11039354 C7.27353465,4.09439979 7.28017356,4.07840604 7.28741601,4.06241229 C7.49425148,3.75045443 7.81811547,3.53505279 8.18578189,3.46490996 L8.18578189,3.46490996 Z M6.03537704,6.53721865 L7.78774877,5.53564783 C7.94181512,5.59550487 8.10032406,5.64322908 8.26182764,5.67838449 C8.51607402,5.73108416 8.77500741,5.75787735 9.03465767,5.75835324 L9.06664517,5.75835324 C9.09078667,5.75835324 9.11975648,5.75835324 9.14631214,5.75835324 L9.14631214,5.75835324 C9.54637196,5.75152959 9.94233732,5.67652069 10.3171753,5.53655313 L12.0707541,6.53721865 L12.0707541,7.71985078 L9.05306557,8.75853917 L6.03537704,7.71985078 L6.03537704,6.53721865 Z M9.05306557,0.652726027 L11.2710666,1.57070688 L9.82257614,2.82425469 C9.57283547,2.77036286 9.3182058,2.74235158 9.06272217,2.74066472 L9.03254529,2.74066472 C8.77999267,2.74274266 8.52831507,2.77065066 8.28144261,2.82395292 L6.83295212,1.57100864 L9.05306557,0.652726027 Z M3.4238694,1.38270488 C3.60744974,1.06632277 3.92003525,0.845881648 4.27968586,0.779167176 C4.63406638,0.712093 5.0000949,0.802526167 5.28246376,1.0269194 L7.60608392,3.0373035 C7.19955937,3.19513912 6.8734051,3.50955184 6.70077736,3.91001902 C6.68473193,3.95632735 6.6720251,4.00372582 6.66275449,4.05185038 L4.05698045,3.17672071 C3.71523822,3.04548815 3.44820399,2.77103804 3.32637954,2.42583007 C3.2045551,2.0806221 3.24018759,1.69936042 3.4238694,1.38270488 Z M0.603537704,4.14932172 L3.04333887,3.13990491 C3.25218124,3.41087237 3.53155614,3.61915074 3.85087232,3.74193377 L5.73572057,4.37564836 L3.62122623,5.58272377 L3.62122623,6.88576167 L0.603537704,5.8449609 L0.603537704,4.14932172 Z M1.20707541,6.6917243 L3.62122623,7.52460633 L3.62122623,15.4955288 L1.20707541,14.6001806 L1.20707541,6.6917243 Z M6.03537704,16.3896699 L6.03537704,8.35718659 L9.05306557,9.39708206 L12.0707541,8.35718659 L12.0707541,16.3896699 L9.05306557,17.5062147 L6.03537704,16.3896699 Z M16.8990557,14.6001806 L14.4849049,15.4943217 L14.4849049,7.52460633 L16.8990557,6.6917243 L16.8990557,14.6001806 Z M17.5025934,5.84375382 L14.4849049,6.88485636 L14.4849049,5.58302554 L12.3704106,4.37595013 L14.2673296,3.73650193 C14.5823176,3.61400394 14.8575921,3.40731318 15.063094,3.1389996 L17.5025934,4.14932172 L17.5025934,5.84375382 Z'></path>
    </g>
  </svg>
)

export default connect(mapStateToProps)(InvitesIcon)
