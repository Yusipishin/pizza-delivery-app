import ContentLoader from "react-content-loader"

const BlockActionSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={1103}
    height={408}
    viewBox="0 0 1103 408"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="119" y="58" rx="0" ry="0" width="3" height="1" /> 
    <rect x="0" y="0" rx="0" ry="0" width="541" height="406" /> 
    <rect x="569" y="0" rx="20" ry="20" width="253" height="190" /> 
    <rect x="841" y="0" rx="20" ry="20" width="253" height="190" /> 
    <rect x="569" y="215" rx="20" ry="20" width="253" height="190" /> 
    <rect x="841" y="215" rx="20" ry="20" width="253" height="190" />
  </ContentLoader>
)

export default BlockActionSkeleton

