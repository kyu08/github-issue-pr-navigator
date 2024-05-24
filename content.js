document.addEventListener('keydown', function(event) {
  const items = document.querySelectorAll('.js-issue-row'); // GitHubのIssue/PRのリストを選択
  if (!items.length) return;

  let currentIndex = Array.from(items).findIndex(item => item.classList.contains('selected'));

  // 初期選択
  if (currentIndex === -1) {
    currentIndex = 0;
    items[currentIndex].classList.add('selected');
  } else {
    items[currentIndex].classList.remove('selected');
  }

  // 上キー
  if (event.key === 'ArrowUp') {
    event.preventDefault();  // デフォルト動作をキャンセル
    currentIndex = Math.max(0, currentIndex - 1);
  }

  // 下キー
  if (event.key === 'ArrowDown') {
    event.preventDefault();  // デフォルト動作をキャンセル
    currentIndex = Math.min(items.length - 1, currentIndex + 1);
  }

  // Enterキー
  if (event.key === 'Enter') {
    event.preventDefault();  // デフォルト動作をキャンセル
    const selectedItem = items[currentIndex];
    const link = selectedItem.querySelector('a.js-navigation-open');
    if (link) {
      window.location.href = link.href;
    }
  }

  // 新しい選択を追加
  items[currentIndex].classList.add('selected');
});

// ページ遷移後に選択状態をリセットするためのリスナーを追加
window.addEventListener('load', function() {
  const items = document.querySelectorAll('.js-issue-row');
  items.forEach(item => item.classList.remove('selected'));

  if (items.length > 0) {
    items[0].classList.add('selected'); // 初期選択
  }
});
