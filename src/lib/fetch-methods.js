"use server";

import { getToken } from "@/services";

// 🧰 تجهيز الهيدر
async function getHeaders({
  isFormData = false,
  withToken = true,
  token = null,
}) {
  const headers = {};

  // لو مش FormData نحط Content-Type
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }

  // لو مطلوب توكن
  if (withToken) {
    // لو فيه توكن ممرر من الخارج
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    } else {
      // لو مفيش، نجيب التوكن من الكوكي
      const storedToken = await getToken();
      if (storedToken) {
        headers["Authorization"] = `Bearer ${storedToken}`;
      }
    }
  }

  return headers;
}

// 📨 GET Request
export async function getData({ url, withToken = true, token = null }) {
  try {
    const headers = await getHeaders({ isFormData: false, withToken, token });

    const response = await fetch(
      `https://school-management.prower.store/api${url}`,
      {
        method: "GET",
        headers,
      }
    );

    const resData = await response.json();

    return {
      code: response.status,
      success: response.ok,
      data: resData,
    };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// 📨 POST Request
export async function postData({
  url,
  data = {},
  isFormData = false,
  withToken = true,
  token = null,
}) {
  try {
    const headers = await getHeaders({ isFormData, withToken, token });

    const body = isFormData ? getFormData(data) : JSON.stringify(data);

    const response = await fetch(
      `https://school-management.prower.store/api${url}`,
      {
        method: "POST",
        headers,
        body,
      }
    );

    const resData = await response.json();

    return {
      code: response.status,
      success: response.ok,
      data: resData,
    };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// ✏️ PUT Request
export async function putData({
  url,
  data = {},
  isFormData = false,
  withToken = true,
  token = null,
}) {
  try {
    const headers = await getHeaders({ isFormData, withToken, token });

    const body = isFormData ? getFormData(data) : JSON.stringify(data);

    const response = await fetch(
      `https://school-management.prower.store/api${url}`,
      {
        method: "PUT",
        headers,
        body,
      }
    );

    const resData = await response.json();

    return {
      code: response.status,
      success: response.ok,
      data: resData,
    };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// 🗑 DELETE Request
export async function deleteData({ url, withToken = true, token = null }) {
  try {
    const headers = await getHeaders({ isFormData: false, withToken, token });

    const response = await fetch(
      `https://school-management.prower.store/api${url}`,
      {
        method: "DELETE",
        headers,
      }
    );

    const resData = await response.json();

    return {
      code: response.status,
      success: response.ok,
      data: resData,
    };
  } catch (err) {
    return {
      code: 500,
      success: false,
      message: err?.message || "Unexpected error",
    };
  }
}

// 🧾 تحويل object إلى FormData
function getFormData(data) {
  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
}
