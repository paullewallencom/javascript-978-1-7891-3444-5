function augment(destination, source, methodNames) {
  if (methodNames) {
    for (var methodName of methodNames) {
	  if (source.hasOwnProperty(methodName)) {
        destination[methodName] = source[methodName];
      }
    }
  } else {
    for (var methodName in source) {
      if (source.hasOwnProperty(methodName)) {
        destination[methodName] = source[methodName];
      }
    }  
  }

  return destination; 
}
