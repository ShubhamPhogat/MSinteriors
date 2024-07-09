import React, { useState } from "react";
import { Card, Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadCard = () => {
  const [fileList, setFileList] = useState([]);

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleUpload = async () => {
    try {
      // Add your upload logic here
      message.success("File uploaded successfully.");
    } catch (error) {
      message.error("Failed to upload file.");
    }
  };

  return (
    <div className="admin-container">
      <Card title="Upload Interface" className="w-full mt-4">
        <Upload
          fileList={fileList}
          onChange={handleUploadChange}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
        <Button type="primary" onClick={handleUpload} className="mt-2">
          Upload
        </Button>
      </Card>
    </div>
  );
};

export default UploadCard;
