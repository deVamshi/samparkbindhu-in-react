import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./contactform.css";

export default function ContactForm() {
  const formLayout = {
    wrapperCol: {
      span: 24,
    },
  };
  return (
    <div className="contact-form">
      <p>We would like to hear from you!</p>
      <Form {...formLayout} layout="vertical">
        <Form.Item
          label="Full Name"
          rules={[{ required: true, message: "Name is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          rules={[{ required: true, message: "Email is required" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Phone">
          <Input />
        </Form.Item>
        <Form.Item label="Message">
          <Input.TextArea style={{ minHeight: "120px" }} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...formLayout.wrapperCol,
            // offset: formLayout.labelCol.span,
          }}
        >
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
