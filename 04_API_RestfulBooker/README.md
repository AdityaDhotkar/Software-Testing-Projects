# 🏨 Restful Booker API Testing

This project demonstrates **API Automation Testing** on the Restful Booker API using **Postman**.

## 🚀 Scenarios Covered
I have created a complete end-to-end flow testing the CRUD operations:
1.  **Auth:** Generated Token dynamically for secure access.
2.  **Create Booking (POST):** Verified creation of new data.
3.  **Get Booking (GET):** Validated data retrieval.
4.  **Update Booking (PUT):** Used Token to modify existing data.
5.  **Delete Booking (DELETE):** Removed data to clean up.

## 🛠️ Technical Highlights
- **Environment Variables:** Used for storing `bookingId` and `accessToken` dynamically.
- **Request Chaining:** Output of one request (e.g., Token) is automatically passed to the next request (e.g., Update/Delete).
- **Assertions:** Added tests to verify Status Code (200/201) and JSON Body verification.

## ⚙️ How to Run
1.  Download the `.json` file from this repository.
2.  Open **Postman**.
3.  Click **Import** and select the file.
4.  Run the collection to see the automation in action.