export default {
  methods: {
    normalizeSize(size) {
      if (typeof size === 'number') {
        return size + 'px';
      }
      if (typeof size === 'string') {
        return size;
      }
      return size;
    }
  }
};
