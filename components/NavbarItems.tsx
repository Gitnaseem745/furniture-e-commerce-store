import Link from "next/link";
interface NavbarItemsProps {
    divCss?: string;
    linkCss?: string;
}
const NavbarItems: React.FC<NavbarItemsProps> = ({ divCss, linkCss }) => (
    <div className={`flex ${divCss}`}>
            {
                menuItems.map((item, i) => (
                    <Link className={`${linkCss}`} href={`/${ item == "Home" ? '' : item == "Sofas" ? 'product-category/sofas' : item.toLowerCase().replaceAll(" ", "-")}`} key={i}>{item}</Link>
                ))
            }
        </div>
)
const menuItems = ["Home", "Products", "About Us", "Sofas", "Contact Us"];
export default NavbarItems;
