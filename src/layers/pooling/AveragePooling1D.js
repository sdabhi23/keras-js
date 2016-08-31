import _Pooling1D from './_Pooling1D'

/**
 * AveragePooling1D layer class, extends abstract _Pooling1D class
 */
export default class AveragePooling1D extends _Pooling1D {
  /**
   * Creates a AveragePooling1D activation layer
   */
  constructor (attrs = {}) {
    super(attrs)
    this.poolingFunc = 'average'
  }
}
