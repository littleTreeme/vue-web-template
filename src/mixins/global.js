/*
 * 公共部分参数与方法
 * @Author: tree
 * @Date: 2019-10-25 10:10:51
 * @Last Modified by: tree
 * @Last Modified time: 2019-10-25 10:10:51
 */
export default {
  data() {
    return {
      modal: {
        visual: false,
        title: '',
        type: null,
        active: 0,
      },
      searchData: [],
      showAlert: false,
      params: {
        pageSize: 10,
        pageNo: 0,
      },
    };
  },
  methods: {
    // 判断输入的值
    validate(schema, values) {
      const valArr = values;
      for (const field in schema) {
        if (Object.prototype.hasOwnProperty.call(schema, field)) {
          for (const key of schema[field]) {
            if (key.required) {
              if (!valArr[field]) {
                valArr.tips = key.error;
                return false;
              }
            } else if (key.regex) {
              if (!new RegExp(key.regex).test(valArr[field])) {
                valArr.tips = key.error;
                return false;
              }
            }
          }
        }
      }
      return true;
    },
    clear() {

    },
    turnPage(val) {
      this.params.pageNo = val;
      this.updateData(this.params);
    },
    turnPageSize(val) {
      this.params.pageSize = val;
      this.updateData(this.params);
    },
    showModal(type, title) {
      this.modal.visual = true;
      this.modal.type = type;
      this.modal.title = title;
    },
    closeModal() {
      this.modal.visual = false;
    },
  },
};
