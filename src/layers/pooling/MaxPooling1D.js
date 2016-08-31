import _Pooling1D from './_Pooling1D'

/**
 * MaxPooling1D layer class, extends abstract _Pooling1D class
 */
export default class MaxPooling1D extends _Pooling1D {
  /**
   * Creates a MaxPooling1D activation layer
   */
  constructor (attrs = {}) {
    super(attrs)
    this.poolingFunc = 'max'
  }
}
