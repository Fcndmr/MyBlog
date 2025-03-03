import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types"
const { Header, Footer, Sider, Content } = Layout;
import {
  DashboardOutlined,
  CreditCardOutlined
} from "@ant-design/icons";

function AdminLayout({children}) {
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "DashBoard",
      path: "/admin",
      onClick: () => {
        navigate("/admin");
      },
    },
    {
      key: "2",
      icon: <CreditCardOutlined />,
      label: "Blog",
      path: "/admin/card",
      children: [
        {
          key: "2-1",
          icon: <CreditCardOutlined />,
          label: "Add Card",
          path: "/admin/card/create",
          onClick: () => {
            navigate("/admin/card/create");
          },
        },
        {
          key: "2-2",
          icon: <CreditCardOutlined />,
          label: "Card List",
          path: "/admin/card",
          onClick: () => {
            navigate("/admin/card");
          },
        },
      ],
    },
  ];
  return (
    <>
      <div className="admin-layout">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider width="20%" style={{ color: "white" }}>
            <Menu
              mode="inline"
              theme="dark"
              items={items}
              style={{ width: "100" }}
            />
          </Sider>
          <Layout>
            <Header style={{ color: "white" }}>Header</Header>
            <Content style={{padding:"30px"}}>{children}</Content>
            <Footer style={{}}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  );
}

export default AdminLayout;

AdminLayout.propTypes = {
  children : PropTypes.node
}