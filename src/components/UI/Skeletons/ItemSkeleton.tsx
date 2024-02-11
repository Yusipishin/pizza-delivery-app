import ContentLoader from "react-content-loader"

const ItemSkeleton = () => (
  <ContentLoader 
    speed={2}
    width={255}
    height={420}
    viewBox="0 0 255 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="127" cy="127" r="127" /> 
    <rect x="0" y="268" rx="7" ry="7" width="255" height="25" /> 
    <rect x="0" y="307" rx="7" ry="7" width="255" height="57" /> 
    <rect x="124" y="379" rx="10" ry="10" width="131" height="38" /> 
    <rect x="0" y="385" rx="7" ry="7" width="93" height="25" />
  </ContentLoader>
)

export default ItemSkeleton

