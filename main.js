const product = {
  id: "hfi4ufh1i4fhir2cqhebv",
  store_id: "1",
  order_id: "1",
  amount: "2300",
  parts_count: "1",
  merchant_type: "1",
  scheme: "1",
  products: "Clothes",
  recipient_id: "1",
  response_url:
    "https://test-ocean-credit-app.herokuapp.com/api/storeproducts/",
  redirect_url:
    "https://ocean-credit-feature-jul.web.app/paylogin/?storeproduct_id",
  signature: "1",
};

async function sendObjeckt() {
  const response = await fetch(
    "https://test-ocean-credit-app.herokuapp.com/api/storeproducts/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "manual",

      body: JSON.stringify(product),
    }
  );
  location.replace(
    `https://ocean-credit-feature-jul.web.app/paylogin/?storeproduct_id=${product.id}`
  );
  console.log(response.headers);
}
function monthPayment() {
  let peaceAmount = Math.round(
    product.amount /
      ((1 - Math.pow(1 + 29.99 / 100 / 12, -parseInt(3))) /
        (29.99 / 100 / 12)) +
      product.amount * (4.99 / 100)
  );

  document.querySelector(
    ".text-center"
  ).innerText = `Оплатіть до 3-ох платежів по ${peaceAmount} грн разом з:`;
}
monthPayment();
