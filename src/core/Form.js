import Errors from '@/core/Errors'

class Form {

  constructor(data) {
    this.originalData = data;

    this.errors = new Errors();

    for (let field in data) {
      this[field] = data[field];
    }
  }

  data() {
    let data = Object.assign({}, this);

    delete data.originalData;

    delete data.errors;

    return data;
  }

  reset() {
    for (let field in this.originalData) {
      this[field] = null;
    }

    this.errors.clear();
  }

  post(url) {
    return this.submit('POST', url);
  }

  delete(url) {
    return this.submit('DELETE', url);
  }

  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then(response => {
          this.onSuccess(response.data);

          resolve(response.data);
        })
        .catch(error => {
          this.onFail(error.response.data);

          reject(error.response.data);
        })
    })
  }

  onSuccess(data) {
    if (data.errors) {
      this.errors.record(data.errors)
    } else {

      this.reset();
    }
  }

  onFail(data) {
    this.errors.record(data.errors)
  }
}

export default Form
