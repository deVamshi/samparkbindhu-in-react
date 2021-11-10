import { Form, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./ContactForm.css";

export default function ContactForm() {
  const formLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 18,
    },
  };
  return (
    <div className="contact-form">
      <p>We would like to hear from you!</p>
      <Form {...formLayout} size="large">
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
        <Form.Item label="Phone" block>
          <Input />
        </Form.Item>
        <Form.Item label="Message">
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...formLayout.wrapperCol,
            offset: formLayout.labelCol.span,
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
