import { BaseTrapHandler } from './BaseTrapHandler';

/**
 * Class representing the traps used to proxy objects.
 * Extends {@link handlers.BaseTrapHandler}.
 * @memberOf handlers
 */
class ObjectTrapHandler extends BaseTrapHandler {
  constructor(emitter) {
    super(emitter);
  }
}

export { ObjectTrapHandler };
