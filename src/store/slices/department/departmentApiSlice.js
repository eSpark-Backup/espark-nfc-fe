import { DEPARTMENT, DEPARTMENT_DROPDOWN } from "../../../api/apiEndPoints";

import { apiSlice } from "../../../api/apiSlice";

export const departmentApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addDepartment: builder.mutation({
      query: (body) => {
        const formData = new FormData();

        for (const key in body) {
          if (body[key] !== undefined && body[key] !== null) {
            if (key === "image" && body[key] instanceof File) {
              formData.append("image", body[key]);
            } else {
              formData.append(key, body[key]);
            }
          }
        }

        return {
          url: DEPARTMENT,
          method: "POST",
          body: formData,
        };
      },
    }),
    getDepartment: builder.query({
      query: ({ page = "", limit = "", sort_order = "desc", search = "" }) => ({
        url: DEPARTMENT,
        params: { page, limit, sort_order, search },
        method: "GET",
      }),
    }),
    getDepartmentDropdown: builder.query({
      query: () => ({
        url: DEPARTMENT_DROPDOWN,
        method: "GET",
      }),
    }),
    updateDepartment: builder.mutation({
      query: ({ body, id }) => {
        const formData = new FormData();

        for (const key in body) {
          if (body[key] !== undefined && body[key] !== null) {
            if (key === "image" && body[key] instanceof File) {
              formData.append("image", body[key]);
            } else {
              formData.append(key, body[key]);
            }
          }
        }

        return {
          url: `${DEPARTMENT}/${id}`,
          method: "PATCH",
          body: formData,
        };
      },
    }),
    deleteDepartment: builder.mutation({
      query: ({ id }) => {
        return {
          url: `${DEPARTMENT}/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useAddDepartmentMutation,
  useGetDepartmentQuery,
  useLazyGetDepartmentQuery,
  useLazyGetDepartmentDropdownQuery,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApiSlice;
