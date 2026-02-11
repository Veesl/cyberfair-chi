// tests/values.test.js
test('應能正確獲取思想品質頁面的五明心清單', () => {
    const philosophy = getContent('philosophy');
    expect(philosophy.hearts).toHaveLength(5);
    expect(philosophy.hearts[0]).toContain('kind heart');
});