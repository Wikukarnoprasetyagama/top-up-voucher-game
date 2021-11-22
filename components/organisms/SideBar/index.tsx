import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            title="Overview"
            href="/member"
            icon="ic-menu-overview"
            active={activeMenu === "overview"}
          />
          <MenuItem
            title="Transactions"
            href="/member/transactions"
            icon="ic-menu-transaction"
            active={activeMenu === "transactions"}
          />
          <MenuItem title="Message" href="/member" icon="ic-menu-message" />
          <MenuItem title="Card" href="/member" icon="ic-menu-card" />
          <MenuItem title="Rewards" href="/member" icon="ic-menu-rewards" />
          <MenuItem
            title="Settings"
            href="/member/edit-profile"
            icon="ic-menu-setting"
            active={activeMenu === "settings"}
          />
          <MenuItem title="Logout" href="/sign-in" icon="ic-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
