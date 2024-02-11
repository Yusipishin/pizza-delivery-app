import ContentLoader from "react-content-loader"

const NoveltySkeleton = () => (
  <ContentLoader 
    speed={2}
    width={258}
    height={99}
    viewBox="0 0 258 99"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="49" cy="49" r="35" /> 
    <rect x="119" y="58" rx="0" ry="0" width="3" height="1" /> 
    <rect x="103" y="54" rx="7" ry="7" width="70" height="21" /> 
    <rect x="103" y="24" rx="7" ry="7" width="130" height="22" />
  </ContentLoader>
)

export default NoveltySkeleton

