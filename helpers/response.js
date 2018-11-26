export default {
  success: function (value , code = 200) {
    var data = {}
    if (typeof value === 'object') {
      var objKey = Object.keys(value);
      data = value[objKey];
    }
    return {
      data : value,
      status : code
    };
  },

  error: function (value , code = 500) {
    var data = {}
    if (typeof value === 'object') {
      var objKey = Object.keys(value);
      data = value[objKey];
    }
    return {
      data : value,
      status : code
    };
  },
  errorValidate: function(err, code = 400){
    var error = [];
    if(typeof(err) === 'object'){
      for(let index in err.errors){
        error.push({
          message:err.errors[index].message,
          field:err.errors[index].path
        });
      }
      return{
        data: error,
        status: code
      }
    }
  }
}