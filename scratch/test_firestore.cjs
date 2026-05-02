const apiKey = "AIzaSyACXswY8-RUFg_MHLT75w1VC_agARbLrKA";
const projectId = "moreno-restaurant";

async function testFirestore() {
  console.log("Testing Firestore Write Rules...");
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/settings/general?updateMask.fieldPaths=capacityItalian&key=${apiKey}`;
  
  const payload = {
    fields: {
      capacityItalian: { integerValue: "99" }
    }
  };

  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    console.log("Status code:", res.status);
    console.log("Response:", JSON.stringify(data, null, 2));

    if (res.status === 200) {
      console.log("SUCCESS! Firestore write allowed.");
    } else {
      console.error("FAILED! Firestore rules rejected the write, or database doesn't exist.");
    }
  } catch (err) {
    console.error("Network error:", err.message);
  }
}

testFirestore();
