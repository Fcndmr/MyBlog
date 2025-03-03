import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

function CreateCard() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const navigate = useNavigate();
  
  const createCard = async (values) => {
    try {
        const response = await fetch("http://localhost:7000/api/card", {
            method : "POST",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Kart başarıyla oluşturuldu...");
            navigate("/admin/card");
        }else{
            console.log("Kart oluşturulurken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };

  return (
    <>  
    <h1>Create Card Panel</h1>
    <br /><hr /><br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={createCard}
      >
        <Form.Item label="Card Image" name="img">
          <Input placeholder="Card image enter..." />
        </Form.Item>
        <Form.Item label="Card Title" name="title">
          <Input placeholder="Card title enter..." />
        </Form.Item>
        <Form.Item label="Card Description" name="description">
          <Input placeholder="Card description enter..." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Create</Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateCard;