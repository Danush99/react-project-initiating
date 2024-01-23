import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type Student = {
  name: string;
  id: string;
  age: number;
}

interface StudentsState {
  students: Student[];
}

const initialState: StudentsState = {
  students: [],
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    },
    removeStudentById: (state, action: PayloadAction<string>) => {
      state.students = state.students.filter((student) => student.id !== action.payload);
    },
    popStudent: (state) => {
      state.students =  state.students.slice(0, -1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudentsAsync.pending, () => {
        console.log("getAllStudentsAsync.pending");
      })
      .addCase(
        getAllStudentsAsync.fulfilled,
        (state, action: PayloadAction<Student[]>) => {
          state.students = action.payload;
        }
      );
  },
});

export const getAllStudentsAsync = createAsyncThunk(
  "students/getAllStudentsAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('got all students: ',amount)
    const allStudents : Student[] = [
      {
        name: "Madaya",
        id: "m23432",
        age: 24,
      },
      {
        name: "Madaya",
        id: "m23432",
        age: 24,
      },
      {
        name: "Madaya",
        id: "m23432",
        age: 24,
      },
    ]
    return allStudents;
  }
);

export const { addStudent, removeStudentById, popStudent } = studentSlice.actions;

export default studentSlice.reducer;