import React from "react";
import "./contactinfo.css";
import reviewUs from "./Assets/reviewUs.jpg";

function ContactInfo() {
  return (
    <div className="container-wrapper contact">
      <h1>Contact Information</h1>
      <div className="body-style contactBody">
        <div className="sub-content subcontent">
          <p className="p-style">Phone: 90967798</p>
          <p className="p-style">
            Visit our salon at: <br />
            Blk 201E Tampines St 23, #01-78, Singapore 527201
          </p>
          Email us at:
          <p>journeybeauty@gmail.com</p>
        </div>

        <a href="https://www.google.com/localservices/prolist?g2lbs=AOHF13k-3quz4b9AF-DgH6fvWAigB8WvEUR9x_MiITQvn16vggqaogPag7pLP_2o9GFJQzPVp5h2fvdkdBn7cuHYykw7wFmnxpVUyKiY21VfU3kLi7TLHxU%3D&hl=en-SG&gl=sg&cs=1&ssta=1&q=shebella%20beauty&oq=shebella%20beauty&slp=MgBSAggCYAB6tgFDZzl6YUdWaVpXeHNZU0JpWldGMWRIbEk2cV9MeS1XQWdJQUlXaUVRQUJBQkdBQVlBU0lQYzJobFltVnNiR0VnWW1WaGRYUjVLZ1lJQWhBQUVBR1NBUXhpWldGMWRIbGZjMkZzYjI2cUFUZ1FBVElmRUFFaUc5ampzcWszZ2w3bExhcmRpNDh0UXZzakx1N2dlMkJLLVZhNDJUSVRFQUlpRDNOb1pXSmxiR3hoSUdKbFlYVjBlUZIBHAoLL2cvMXRkcjVwX2IKDS9nLzExc21yZGptM2Q%3D&src=2&spp=CgsvZy8xdGRyNXBfYjqYAVdpRVFBQkFCR0FBWUFTSVBjMmhsWW1Wc2JHRWdZbVZoZFhSNUtnWUlBaEFBRUFHU0FReGlaV0YxZEhsZmMyRnNiMjZhQVFDcUFUZ1FBVElmRUFFaUc5ampzcWszZ2w3bExhcmRpNDh0UXZzakx1N2dlMkJLLVZhNDJUSVRFQUlpRDNOb1pXSmxiR3hoSUdKbFlYVjBlUT09&serdesk=1&lrlstt=1720683429922&ved=2ahUKEwjyotWBvZ6HAxXBVmwGHREQDJgQvS56BAgaEAE&scp=ChFnY2lkOmJlYXV0eV9zYWxvbhIzEhIJpVt39rMi2jERD2-YBlmmdLUiBUJlZG9rKhQNoaXGABVyTO09HTKyzQAlOb33PTABGg9zaGViZWxsYSBiZWF1dHkiD3NoZWJlbGxhIGJlYXV0eSoMQmVhdXR5IFNhbG9u">
          <div className="sub-content subcontent">
            <img src={reviewUs} className="review-img" alt="reviewUs" />
          </div>
        </a>
      </div>
      <h3 className="h3-style">Service Hours</h3>
      <p className="opening-time">
        Mon - Sun: 10am - 10pm <br />
      </p>
    </div>
  );
}

export default ContactInfo;
