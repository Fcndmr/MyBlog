import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateCard() {
  const [form] = Form.useForm();
  const formLayout = "vertical";
  const params = useParams();
  const navigate = useNavigate();
  const cardId = params.id;

  const getCardById = async () => {
    try {
        const response = await fetch(`http://localhost:7000/api/card/${cardId}`);
        if(response.ok){
            const data = await response.json();
            if(data){
                form.setFieldsValue({
                    img : data.img,
                    title : data.title,
                    description : data.description,
                    _id : cardId
                })
                console.log(form.getFieldsValue())
            }
        }          
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  }

  useEffect(() => {
    getCardById()
  });

  const updateCard = async (values) => {
    try {
        const response = await fetch(`http://localhost:7000/api/card/${cardId}`, {
            method : "PUT",
            headers : { "Content-Type" : "application/json"},
            body : JSON.stringify(values)
        });
        if(response.ok){
            console.log("Kart başarıyla güncellendi...");
            navigate("/admin/card");
        }else{
            console.log("Kart güncellenirken bir hata oluştu...");
        }
    } catch (error) {
        console.log("Sunucu hatası...", error);
    }
  };
  
  return (
    <>
    
    <h1>Update Card Panel</h1>
    <br /><hr /><br />
      <Form
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onFinish={updateCard}
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
          <Button type="primary" htmlType="submit">Update</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default UpdateCard