// Создаёт функцию с кешем для асинхронного получения данных
function createAsyncCache(fetchFn) {
  const cache = new Map(); // Хранилище результатов

  return async function getData(key) {
    if (cache.has(key)) {
      return cache.get(key); // возвращаем из кеша
    }

    // получаем данные и сохраняем Promise в кеш
    const promise = fetchFn(key);
    cache.set(key, promise);

    try {
      const result = await promise;
      return result;
    } catch (err) {
      cache.delete(key); // очищаем кеш при ошибке
      throw err;
    }
  };
}

module.exports = { createAsyncCache };
