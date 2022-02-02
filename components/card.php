
<?php
include __DIR__ . '/../server/db.php';
foreach ($music as $card) : ?>

    <div class="card">
        <img src="<?= $card['poster'] ?>" alt="<?= $card['title'] ?>" />
        <h1><?= $card['title'] ?></h1>
        <span class="mt-2"><?= $card['author'] ?></span>
        <span class="pb-3"><?= $card['year'] ?></span>
    </div>

<?php endforeach ?>