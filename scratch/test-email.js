const fs = require('fs');
const path = require('path');

// Basic env loader
function loadEnv() {
  const envPath = path.resolve('.env.local');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    content.split('\n').forEach(line => {
      const parts = line.split('=');
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join('=').trim();
        process.env[key] = value;
      }
    });
  }
}

loadEnv();

const email = process.env.NEXT_PUBLIC_ORDER_EMAIL || 'ibrarulhasan424@gmail.com';
const key = process.env.WEB3FORMS_ACCESS_KEY || '';

console.log("Configured Order Email:", email);
console.log("Web3Forms Key:", key);

const messageBody = `
New Order TEST-999
------------------
Customer: Test Customer
Mobile: 03001234567
Address: Test Address, Lahore, Pakistan
Items:
- Birthday Cake (x1) - Rs 2,500
Total: Rs 2,500
`;

async function testWeb3Forms() {
  if (!key) {
    console.log("Skipping Web3Forms: No access key configured.");
    return;
  }
  console.log("\n--- Testing Web3Forms ---");
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "http://localhost:3000/",
        "Origin": "http://localhost:3000"
      },
      body: JSON.stringify({
        access_key: key,
        subject: `New Order TEST-999 – RahiQBakes`,
        from_name: `Test Customer (03001234567)`,
        name: `Test Customer`,
        email: email,
        phone: `03001234567`,
        message: messageBody,
      }),
    });

    console.log("Status:", res.status);
    console.log("Headers content-type:", res.headers.get('content-type'));
    const text = await res.text();
    console.log("Response text:", text);
  } catch (error) {
    console.error("Web3Forms error:", error);
  }
}

async function testFormSubmit() {
  console.log("\n--- Testing FormSubmit ---");
  try {
    const res = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(email)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Referer": "http://localhost:3000/",
          "Origin": "http://localhost:3000"
        },
        body: JSON.stringify({
          _subject: `New Order TEST-999 – RahiQBakes`,
          _template: "table",
          _captcha: "false",
          order_id: "TEST-999",
          customer_name: "Test Customer",
          mobile: "03001234567",
          delivery_address: "Test Address, Lahore, Pakistan",
          order_notes: "This is a test",
          payment_method: "Cash on Delivery",
          total: "Rs 2,500",
          order_details: messageBody,
        }),
      }
    );

    console.log("Status:", res.status);
    console.log("Headers content-type:", res.headers.get('content-type'));
    const text = await res.text();
    console.log("Response text:", text);
  } catch (error) {
    console.error("FormSubmit error:", error);
  }
}

async function run() {
  await testWeb3Forms();
  await testFormSubmit();
}

run();
