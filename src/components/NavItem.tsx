import { Button } from "./ui/button"
import {PRODUCT_CATEGORIES}
type Category = typeof PRODUCT_CATEGORIES

interface NavItemProps {
    category: Category
}

const NavItem = () => {
    return <div className="flex">
        <div className="relative fles items-center">
            <Button className="gap-1.5"></Button>
        </div>
    </div>
} 

export default NavItem;