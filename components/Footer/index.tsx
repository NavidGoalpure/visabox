import useDevice from "hooks/useDevice"
import DesktopFooter from "./DesktopFooter"
import MobileFooter from "./MobileFooter"

const SmartFooter = () =>{
const {isTablet} = useDevice()
    if(isTablet) return <MobileFooter />
    return <DesktopFooter />
}
export default SmartFooter