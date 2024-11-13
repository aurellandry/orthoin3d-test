import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecords = createAsyncThunk("records/fetchRecords", async () => {
    const response = await fetch("http://localhost:8000/api/records/");
    const data = await response.json();
    return data;
});

export const getRecord = createAsyncThunk("records/getRecord", async (id) => {
    const response = await fetch(`http://localhost:8000/api/records/${id}`);
    const data = await response.json();
    return data;
});

export const addRecord = createAsyncThunk("records/addRecord", async (recordData) => {
    const response = await fetch("http://localhost:8000/api/records/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recordData),
    });
    const data = await response.json();
    return data;
});

export const updateRecord = createAsyncThunk(
    "records/updateRecord",
    async ({ id, recordData }) => {
        const response = await fetch(`http://localhost:8000/api/records/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recordData),
        });
        const data = await response.json();
        return data;
    }
);

export const deleteRecord = createAsyncThunk("records/deleteRecord", async (id) => {
    await fetch(`http://localhost:8000/api/records/${id}`, {
        method: "DELETE",
    });
    return id;
});

const recordsSlice = createSlice({
    name: "records",
    initialState: {
        records: [],
        status: "idle",
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecords.fulfilled, (state, action) => {
                state.records = action.payload;
                state.status = "succeeded";
            })
            .addCase(getRecord.fulfilled, (state, action) => {
                const existingRecord = state.records.find((record) => record.id === action.payload.id);
                if (existingRecord) {
                    Object.assign(existingRecord, action.payload);
                } else {
                    state.records.push(action.payload);
                }
            })
            .addCase(addRecord.fulfilled, (state, action) => {
                state.records.push(action.payload);
            })
            .addCase(updateRecord.fulfilled, (state, action) => {
                const index = state.records.findIndex((record) => record.id === action.payload.id);
                if (index !== -1) {
                    state.records[index] = action.payload;
                }
            })
            .addCase(deleteRecord.fulfilled, (state, action) => {
                state.records = state.records.filter((record) => record.id !== action.payload);
            });
    },
});

export default recordsSlice.reducer;
