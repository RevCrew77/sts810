// import React from 'react'
// import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@material-ui/core'
// import { withRouter } from 'react-router-dom'

// const BreadCrumbs = (props) => {
//   const {
//     history,
//     location: { pathname }
//   } = props
//   const pathnames = pathname.split('/').filter((x) => x)
//   return (
//     <MUIBreadcrumbs aria-label="breadcrumb">
//       {pathnames.length > 0 ? <Link onClick={() => history.push('/')}>Home</Link> : <Typography> Home </Typography>}
//       {pathnames.map((name, index) => {
//         const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
//         const isLast = index === pathnames.length - 1
//         return isLast ? (
//           <Typography key={name}>{name}</Typography>
//         ) : (
//           <Link key={name} onClick={() => history.push(routeTo)}>
//             {name}
//           </Link>
//         )
//       })}
//     </MUIBreadcrumbs>
//   )
// }

// export default BreadCrumbs

// еxport function withRouter<P extends RoutedProps>( Child: React.ComponentClass<P> ) {
//   return ( props: Omit<P, keyof RoutedProps> ) => {
//       const location = useLocation();
//       const navigate = useNavigate();
//       const params = useParams();
//       return <Child { ...props as P } navigate={ navigate } location={ location } params={ params }/>;
//   }
// }
