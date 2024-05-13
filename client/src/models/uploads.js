export const getUploads = async () => {
    const req = await fetch("http://localhost:3000/uploads", {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
    });
    const data = await req.json();
    return{
        status: req.status,
        payload: data.payload,
        msg: data.msg
    }
}

export const getUpload = async (id) => {
    const req = await fetch(`http://localhost:3000/uploads/${id}`, {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
    });
    const data = await req.json();
    return{
        status: req.status,
        payload: data.payload,
        msg: data.msg
    }
}

export const postUpload = async (formdata) => {
    const req = await fetch("http://localhost:3000/uploads", {
    method: "POST",
    body: formdata

    });
    const data = await req.json();
    return{
        status: req.status,
        payload: data.payload,
        msg: data.msg
    }
}
export const updateUpload = async (id, formData) => {
    const res = await fetch(`http://localhost:3000/uploads/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    });
    const data = await res.json();
    return createUploadPayload(res, data);
}

export const deleteUpload = async (id) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return createUploadPayload(res, data);
  };

  const createUploadPayload = (res, data) => {
    return {
        msg: data.msg,
        data: data.payload,
        status: res.status
    };
};