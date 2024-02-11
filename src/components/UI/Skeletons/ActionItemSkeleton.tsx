import ContentLoader from "react-content-loader"

const ActionItemSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={350}
    height={254}
    viewBox="0 0 350 254"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="119" y="58" rx="0" ry="0" width="3" height="1" /> 
    <rect x="20" y="13" rx="0" ry="0" width="260" height="28" /> 
    <rect x="20" y="48" rx="7" ry="7" width="315" height="115" /> 
    <rect x="20" y="188" rx="8" ry="8" width="147" height="44" />
  </ContentLoader>
)

export default ActionItemSkeleton

