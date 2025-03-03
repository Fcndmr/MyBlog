import { Table, Button } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function CardList() {
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      width: "25%",
      render: (img, record) => (<img alt={record.img} src={record.img} width="100"/>)
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title"
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description"
      },
    {
      title: "Process",
      key: "process",
      render: (record) => (
          <>
              <Button color="cyan" variant="solid" onClick={() => navigate(`/admin/card/update/${record._id}`)} style={{margin:"5px"}}>Update</Button>
              <Button color="danger" variant="solid" onClick={() => deleteCard(record._id)}>Delete</Button>
          </>
      )
    }
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const getCards = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/card");
      if (response.ok) {
        const data = await response.json();
        setDataList(data);
      } else {
        console.log("Kartları getirirken bir sorun oluştu...");
      }
    } catch (error) {
      console.log("Sunucu hatası...", error);
    }
  };

  const deleteCard = async (cardId) => {
    try {
      const response = await fetch(`http://localhost:7000/api/card/${cardId}`, {
        method : "DELETE",
        headers : { "Content-Type" : "application/json"},
        body : JSON.stringify({_id : cardId})
      });
      if(response.ok){
        console.log("Kart başarıyla silindi...");
        navigate("/admin/card");
      }
    } catch (error) {
      console.log("Sunucu hatası...", error);
    }
  }

  useEffect(() => {
    getCards();
  }, [deleteCard]);

  return (
    <>
      <h1>Card List</h1>
      <br /><hr /><br />
      <Table columns={columns} dataSource={dataList} onChange={onChange} />
    </>
  );
}

export default CardList;