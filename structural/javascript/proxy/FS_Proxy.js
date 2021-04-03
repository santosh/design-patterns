// This is a proxy to fs which prevents read access to any filetype other than markdown.


class FS_Proxy {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, format, callback) {
    if (!path.match(/.md$|.markdown$/)) {
      return callback(new Error(`Can only read Mardown files.`))
    }

    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }
      return callback(null, contents)
    })
  }
}

module.exports = FS_Proxy;
